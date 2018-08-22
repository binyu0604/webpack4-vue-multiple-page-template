// import "../css/reset.css";
// import "../css/common.css";

console.log("common");

function getContextPath(){
    var localObj = window.location;
    var contextPath = localObj.pathname.split("/")[1];
    return contextPath ;
}