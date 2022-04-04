/*

분야 : 이사청소
기간 : 16. 10. 1 ~ 22. 2. 28
항목 : 서비스 날짜,고객명,전문가명,평수,정가,파트너 임금,예약금,취소여부

＊특이사항
- 전문가 탈퇴자 포함
- 전문청소(B2B) 계정 예약 건 포함

*/


const reservations = db.Reservation.find({
    bookedDate: {
        $gte: "20161001",
        $lte: "20220228"
    },
    serviceCode: "MC"
}).toArray();
// Reservation 에서 해당기간 이사청소관련 예약
// 해당 reservation에 대한 날짜,  가격, 취소여부 등이 필요함-> reservation에 해당 필드가 존재하나??

const users = db.getCollection("_User").find({
    $or: [
        { _p_consumer: { $in: reservations.map(({ _p_consumer }) => _p_consumer) } },   //위 reservation의 사용자
        { _p_moveCleanProvider: { $in: reservations.map(({ providerId }) => `MoveCleanProvider$${providerId}`) } } //위 reservation의 이사청소전문가
    ]
}).toArray();
//user에는 _p_consumer, _p_moveCleanProvider 가 존재하지 않을 수도 있음


const userMap = users.reduce((map, { _p_consumer, _p_moveCleanProvider, userFullName }) => {
    if (!!_p_consumer) map[_p_consumer] = { userFullName }; 
    if (!!_p_moveCleanProvider) map[_p_moveCleanProvider] = { userFullName };
    
    return map;
}, {});

// 사용자id-이름
// 이사청소전문가id-이름
// -> id 를 통해 이름을 구하기 위해서?

const requests = db.MoveCleanRequest.find({
    _id: { $in: reservations.map(({ requestId }) => requestId) }
}).toArray();

//요청들에서 걸러냄

const requestMap = requests.reduce((map, { _id, pyeong }) => {
    map[_id] = { pyeong };
    return map;
}, {});

//요청id-평수
// 요청 id를 통해 평구함
reservations.map(reservation => {
    const { bookedDate, _p_consumer, providerId, commission, requestId, isCanceled, serviceCost, providerIncome } = reservation;

    const { userFullName: consumer } = userMap[_p_consumer], { userFullName: provider } = userMap[`MoveCleanProvider$${providerId}`] || { userFullName: "미확인" }, { pyeong } = requestMap[requestId] || { pyeong: 0 };

    print([bookedDate, serviceCost, providerIncome, commission, (isCanceled ? "취소" : "정상"), consumer, provider, pyeong].join(", "))
});


//let {a : b} = {"a": 1,"c": 2};
//console.log(b) => 1 출력! unpacking 가능


/*
정리:
reservation에 필요한 정보가 대부분 있음.
따라서 reservation의 id를 통해 두가지 이름 구하고, reservation의 request id 를 통해 평 구함

*/