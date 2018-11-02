module.exports={
	//公共路径
	baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',
  //隐藏代码规范警告
  lintOnSave: false,
  // outputDir:'dist',
  // assetsDir:'assets',//静态资源目录，相对outputDir
  //多页打包
  
  pages:{
  	index:{
  		entry: 'src/main.js',
  		template: 'public/index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
  	},
  },
  // productionSourceMap:false,//是否开启js.map错误调试
  // filenameHashing:false,//是否开启文件名哈希

  chainWebpack:config=>{
    // 删除 HTML 相关的 webpack 插件
    config.plugins.delete('prefetch')
  },
  devServer:{
    host:'0.0.0.0',
    port:'3000',
    https:false,
    proxy:'http://localhost:3000',
  }
}