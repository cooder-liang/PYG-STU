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

    /**
     * 添加
     *
     * @param brand
     */
    void addTbBrand(TbBrand brand);

    /**
     * 修改
     *
     * @param brand
     */
    void update(TbBrand brand);

    /**
     * 根据ID获取实体
     *
     * @param id
     * @return
     */
    TbBrand findOne(long id);

    /**
     * 删除
     *
     * @param ids
     */
    void delete(Long[] ids);

    /**
     * 根据条件查询 分页
     *
     * @param brand
     * @param pageNum
     * @param pageSize
     * @return
     */
    PageResult findPage(TbBrand brand, int pageNum, int pageSize);

}
