<template>
  <el-menu
    :default-active="this.$route.path"
    class="el-menu-vertical-demo"
    unique-opened
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu v-for="nav in navs" :index="nav.index" :key="nav.id">
      <template slot="title">
        <i :class="nav.icon"></i><span>{{nav.title}}</span>
      </template>
      <div v-for="item in nav.items" :key="item.id">
        <template v-if="item.items">
          <el-submenu :index="item.index">
            <template slot="title">{{item.title}}</template>
            <el-menu-item v-for="v in item.items" :index="v.index" :key="v.id">{{v.lable}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">{{item.lable}}</el-menu-item>
        </template>
      </div>
    </el-submenu>
  </el-menu>
</template>
<script>
	export default{
    name:'Nav',
		data(){
			return{
				navs:[{
          index:'系统设置',
					title:'系统设置',
					icon:'el-icon-setting',
					items:[{
						index:'/mkgl',
						lable:'模块管理'
					},{
						index:'/yhgl',
						lable:'用户管理'
					},{
						index:'/sjzd',
						lable:'数据字典'
					},{
						index:'/jsgl',
						lable:'角色管理'
					}]
				},{
          index:'基本资料建档',
          title:'基本资料建档',
          icon:'el-icon-tickets',
          items:[{
            index:'/gszl',
            lable:'公司资料'
          },{
            index:'/2-2',
            lable:'网点资料'
          },{
            index:'/2-3',
            lable:'库位资料'
          },{
            index:'/2-4',
            lable:'工位信息'
          },{
            index:'/2-5',
            lable:'手推车资料'
          },{
            index:'/2-6',
            lable:'车位资料'
          },{
            index:'/2-7',
            lable:'周转箱资料'
          },{
            index:'/2-8',
            lable:'代码名称'
          },{
            index:'/2-9',
            lable:'原料信息'
          },{
            index:'/2-10',
            lable:'默认线路'
          }]
        },{
          index:'调拨订单',
          title:'调拨订单',
          icon:'el-icon-refresh',
          items:[{
            index:'/3-1',
            lable:'订单建立'
          },{
            index:'/3-2',
            lable:'录入对账'
          },{
            index:'/3-3',
            lable:'批次变更'
          }]
        },{
          index:'入库作业',
					title:'入库作业',
					icon:'el-icon-menu',
					items:[{
            index:'4-1',
            title:'申请',
            items:[{
              index:'/pcjl',
              lable:'批次建立'
            },{
              index:'/4-1-2',
              lable:'批次计算'
            },{
              index:'/4-1-3',
              lable:'无订单批次建立'
            },{
              index:'/4-1-4',
              lable:'数据维护'
            },{
              index:'4-1-5',
              lable:'清单审批'
            }]
          },{
            index:'4-2',
            title:'装配',
            items:[{
              index:'/4-2-1',
              lable:'整点装配'
            },{
              index:'/4-2-2',
              lable:'绑定扫码'
            },{
              index:'/4-2-3',
              lable:'车锁条绑定'
            },{
              index:'/4-2-4',
              lable:'装配交接'
            }]
          },{
            index:'4-3',
            title:'运输',
            items:[{
              index:'/4-3-1',
              lable:'批扫门安检'
            }]
          },{
            index:'4-4',
            title:'上架',
            items:[{
              index:'/4-4-1',
              lable:'车锁条解绑'
            },{
              index:'/4-4-2',
              lable:'箱&钱拍照'
            },{
              index:'/4-4-3',
              lable:'空货排查'
            }]
          }]
				}]
			}
		}
	}
</script>
<style scoped>
  .el-menu{
    border-right-width: 0;
  }
</style>