/**
 * @file Tab.js
 * @desc tab组件;
 * @author clouda-team(https://github.com/clouda-team)
 * @param {Object} Class 基类
 * @param {Object} Widget widget的基类
 * @return {Object} tab组件对象
 */
define(['../core/Class', './Widget'], function (Class, Widget) {
    var Tab = Class({
        extend: Widget,
        type: 'tab',
        /**
         * _init 是个别组件需要单独初始化的事项
         * @private
         * @param {Object} options tab自己的初始化
         */
        _init: function (options) {
            this.itemTypes = ['items'];
            this.filterConfig = ['id'];
        }
    });

    return Tab;
});
