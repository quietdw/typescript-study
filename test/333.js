{
    var Gender = void 0;
    (function (Gender) {
        Gender[Gender["Male"] = 0] = "Male";
        Gender[Gender["Female"] = 1] = "Female";
    })(Gender || (Gender = {}));
    function xxx(a, b) {
        if (a.gender !== b.gender) {
            return [a, b];
        }
        else {
            throw new Error("xxx");
        }
    }
    var a = { gender: Gender.Male };
    var b = { gender: Gender.Female };
    console.log(xxx(a, b));
}
