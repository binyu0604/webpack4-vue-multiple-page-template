export default class fileUtils {
    static getContextPath(){
        var localObj = window.location;
        var contextPath = localObj.pathname.split("/")[1];
        return contextPath ;
    }
}