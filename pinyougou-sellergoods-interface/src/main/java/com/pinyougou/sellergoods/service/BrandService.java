package com.pinyougou.sellergoods.service;

import com.pinyougou.entity.PageResult;
import com.pinyougou.pojo.TbBrand;

import java.util.List;

/**
 * 品牌接口
 *
 * @author Administrator
 */
public interface BrandService {

    /**
     * 查询所有数据
     *
     * @return
     */
    List<TbBrand> findAll();

    /**
     * 分页查询
     *
     * @param pageNum
     * @param pageSize
     * @return
     */
    PageResult findPage(int pageNum, int pageSize);

}
