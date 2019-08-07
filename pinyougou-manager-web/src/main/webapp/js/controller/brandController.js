/**
 * 品牌控制器
 */
app.controller("brandController", function ($scope, $controller, brandService) {

    $controller("baseController",{$scope:$scope});//继承

    //搜索
    $scope.search = function (page, rows) {
        brandService.search(page, rows, $scope.searchEntity)
            .success(function (result) {
                $scope.paginationConf.totalItems = result.total;
                $scope.list = result.rows;
            })
    };

    //删除
    $scope.dele = function () {
        if ($scope.selectIds.length < 1) return alert("请先选择要删除的数据");
        brandService.dele($scope.selectIds)
            .success(function (result) {
                if (result.success) $scope.reloadList();
                else alert(result.message);
            })
    };

    //通过ID查询实体
    $scope.findOne = function (id) {
        brandService.findOne(id)
            .success(function (result) {
                $scope.entity = result;
            })
    };

    //保存
    $scope.save = function () {
        brandService.save($scope.entity)
            .success(function (result) {
                if (result.success) $scope.reloadList();
                else alert(result.message);
            })
    };

    //分页
    $scope.findPage = function (page, rows) {
        brandService.findPage(page, rows)
            .success(function (result) {
                $scope.list = result.rows;//显示当前页数
                $scope.paginationConf.totalItems = result.total;//更新总记录数
            })
    }

});