"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[1806],{41806:function(e,t,n){n.r(t),n.d(t,{baseColumns:function(){return d}});var a=n(66252);const d=[{title:"名称",dataIndex:"name"},{title:"图标",width:80,dataIndex:"icon",align:"center",customRender:e=>{let{record:t}=e;return t.icon&&(0,a.Wm)((0,a.up)("icon-font"),{type:t.icon,size:"22"},null)}},{title:"类型",width:80,align:"center",dataIndex:"type",customRender:e=>{let{record:t}=e;return(e=>{switch(e){case 0:return"目录";case 1:return"菜单";case 2:return"权限";default:return""}})(t.type)}},{title:"节点路由",dataIndex:"router",align:"center",width:240},{title:"路由缓存",dataIndex:"keepalive",align:"center",width:80,customRender:e=>{let{record:t}=e;return 1===t.type&&(t.keepalive?"是":"否")}},{title:"文件路径",width:280,align:"center",dataIndex:"viewPath"},{title:"权限",width:300,align:"center",dataIndex:"perms"},{title:"排序号",width:80,align:"center",dataIndex:"orderNum"},{title:"更新时间",width:180,align:"center",dataIndex:"updatedAt"}]}}]);