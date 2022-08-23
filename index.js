function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
saturdayFun("Watch movie");


function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`;
}

mondayWork();
mondayWork("work from home");


function wrapAdjective(allen){
    return function(say){
            return ( `You are ${allen}${say}${allen}!`);
    };
}
wrapAdjective();
wrapAdjective("%")("a dedicated programmer");