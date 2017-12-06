window.onload = function(){
	//按需加载
	var flow = document.getElementsByClassName('flow');	
	window.onscroll = function(){
		var top = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || window.pageYOffset;
		for(var i = 0;i < flow.length;i++){
			var ftop = flow[i].offsetTop;
			var img = flow[i].getElementsByTagName('img');
			if(top > ftop - 300){
				for(var j = 0;j < img.length;j++){
					var dizhi = img[j].getAttribute('attr');
					img[j].src = dizhi;
				}
			}
		}
	}
	//选项卡
	//导航
	// let dh = document.getElementsByClassName('nav-box-lili');
	// // console.log(dh);
	// let dhb = document.getElementsByClassName('nav-child-box');
	// // console.log(dhb);
	// for(let i = 0;i < dh.length;i++){
	// 	dh[i].onmouseover = function(){
	// 		dhb[i].style.height = 229 + 'px';
	// 		dhb[i].style.opacity = 1;
	// 		dhb[i].style.transition = '.2s';
	// 	}
	// 	dh[i].onmouseout = function(){
	// 		for(let j = 0;j < dhb.length;j++){
	// 			dhb[i].style.opacity = 0;
	// 			dhb[i].style.height = 0;
	// 			dhb[i].style.transition = '0s';
	// 		}
	// 	}
	// }
	// 
	// 1、初始化css
	// 2、获取
	// 		导航大盒子  .nav-box
	// 		选项卡大盒子  .nav-child-box
	// 		导航有选项卡的标题  .nav-box-lili
	// 		导航没有选项卡的标题  .nblik
	// 		选项卡  .nav-child
	// 3、导航大盒子  onmouseover
	// 		选项卡大盒子  height = 230px;
	// 4、遍历有选项卡的标题  
	// 		items  display:block/none;
	// 5、没有选项卡的  onmousemove
	// 		height：0；
	// 6、移入导航是操作选项卡的高度
	let dh = document.querySelector('.nav-box');
	console.log(dh)
	let dbh = document.querySelector('.nav-child-box');
	console.log(dbh)
	let items = dh.getElementsByClassName('nav-box-lili');
	let item = dh.getElementsByClassName('nblik');
	let nc = dbh.getElementsByClassName('nav-child');
	dh.onmouseover = function(){
		dbh.style.height = 230 + 'px';
	}
	for(let i = 0; i < items.length;i++){
		items[i].onmouseover = function(){
			for(let j = 0; j < nc.length;j++){
				nc[j].style.display = 'none';
			}
			nc[i].style.display = 'block';
		}
	}
	for(let i = 0;i < item.length;i++){
		item[i].onmousemove = function(){
			dbh.style.height = 0 + 'px';
		}		
	}
	dh.onmouseout = function(){
		dbh.style.height = 0 + 'px';
	}
	//侧导航
	let title = document.getElementsByClassName('aside-nav-ul-li');
	let con = document.getElementsByClassName('aside-nav-shop');
	for(let i = 0;i < title.length;i++){
		title[i].onmouseover = function(){
			for(let j = 0;j < con.length;j++){
				con[j].classList.remove('con-active');
			}
			con[i].classList.add('con-active');
		}
		title[i].onmouseout = function(){
			for(let j = 0;j < con.length;j++){
				con[j].classList.remove('con-active');
			}
		}
	}
	//商品展示
	// 1、初始化CSS
	// 	选项卡  display:block;
	// 2、获取元素
	// 	楼层   .main-box
	// 	标题   .main-word-title
	// 	选项卡盒子   .household-shop-right
	// 3、遍历楼层   .main-box
	// 4、遍历标题  .main-word-title  onmouseover
	// 5、遍历选项卡  .ousehold-shop-right 
	// 6、 移入标题的时候对选项卡进行操作
	// 	添加属性 classList.add
	// 	删除属性 classList.remove
	let floor = document.getElementsByClassName('main-box');
	for(let i = 0; i < floor.length;i++){
		let mititle = floor[i].getElementsByClassName('main-word-title');
		let shop = floor[i].getElementsByClassName('household-shop-right');

		for(let j = 0; j < mititle.length;j++){
			mititle[j].onmouseover = function(){
				for(let k = 0; k < shop.length;k++){
					shop[k].classList.remove('mi-shop');
				}
				shop[j].classList.add('mi-shop');
			}
		}
	}
}