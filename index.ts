import Award from '@xmly/award';

// setAbc方法来自@xmly/award-plugin-dva库，
// 在只引用一个基础库@xmly/award的情况下
// 实现了将@xmly/award-plugin-dva库的api注入到了@xmly/award上
// 同时也支持了ts

Award.setAbc();
Award.setAward();

