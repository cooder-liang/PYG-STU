/**
 * 品牌服务
 */
app.service("brandService", function ($http) {

    //查询所有
    this.findAll = function () {
        return $http.get("../brand/findAll.do")
    };

    //搜索
    this.search = function (page, size, searchEntity) {
        return $http.post("../brand/search.do?page=" + page + "&size=" + size, searchEntity);
    };

    //分页
    this.findPage = function (page, rows) {
        return $http.get("../brand/findPage.do?page=" + page + "&size=" + rows)
    };

    //删除
    this.dele = function (ids) {
        return $http.get("../brand/delete.do?ids=" + ids)
    };

    //查找某一个
    this.findOne = function (id) {
        return $http.get("../brand/findOne.do?id=" + id);
    };

    //保存or更新
    this.save = function (entity) {
        var url = entity.id != null ? "update" : "add";
        return $http.post("../brand/" + url + ".do", entity);
    };




});