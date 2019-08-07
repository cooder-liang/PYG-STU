/**
 * 品牌控制器
 */
app.controller("baseController", function ($scope) {

    $scope.selectIds = [];//选中的ID的集合
    $scope.searchEntity = {};//定义搜索的实体

    /**
     * 更新选中的元素
     */
    $scope.updateSelections = function ($event, id) {
        if ($event.target.checked) $scope.selectIds.push(id);
        else $scope.selectIds.splice($scope.selectIds.indexOf(id), 1);
    };

    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.reloadList();//重新加载
        }
    };

    //重新加载数据
    $scope.reloadList = function () {
        //切换页码
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    };

    //把json转换为String
    $scope.jsonToString = function (jsonString, key) {

        var json = JSON.parse(jsonString);
        var value = "";

        for (var i = 0; i < json.length; i++) {
            if (i > 0) {
                value += ",";
            }
            value += json[i][key];
        }

        return value;
    }
});