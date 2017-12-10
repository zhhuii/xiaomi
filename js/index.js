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
	/*1.初始化css
	2.获取元素
			导航大盒子  .nav-box
			通屏选项卡大盒子  .nav-child-box
			导航有选项卡的标题  .nav-box-lili
			导航没有选项卡的标题  .nblik
			选项卡  .nav-child
	3.导航大盒子  onmouseover
			选项卡大盒子  height = 230px;
	4.遍历有选项卡的标题  
			items  display:block/none;
	5.没有选项卡的  onmousemove
			height：0；*/
	let dh = document.querySelector('.nav-box');
	// console.log(dh);
	let dbh = document.querySelector('.nav-child-box');
	// console.log(dbh);
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
	// console.log(title);
	let con = document.getElementsByClassName('aside-nav-shop');
	// console.log(con);
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
	//轮播图
	/*1.初始化css
		第一张opacity:0;
		其余：opacity:1;
	2.获取元素
		图片  .img-list>li
		大盒子  .banner
	3.让图片自动播放
		开启时间函数
			控制当前图片下标 now
			遍历图片  显示完之后再拉回初始状态
	4.停止自动播放
		鼠标移入  大盒子
			clear
	5.通过轮播点控制图片
		得到每一个轮播点
			for  或  forEach
				鼠标移入或点击  on  addEvenLisiener
	6.左右切换
		右箭头 now++
			if(now == banner.length)  now=0
		左箭头 now--
			if(now < 0)  now = banner.length+1*/
	let bannerBox = document.getElementsByClassName('banner')[0];
	let banner = document.querySelectorAll('.img-list>li');
	let dian  = document.querySelectorAll('.btn-list>li');
	let right = document.querySelectorAll('.banner-right')[0];
	// console.log(forward);
	let left = document.querySelectorAll('.banner-left')[0];
	// console.log(remove);
	let now = 0;
	let time = setInterval(move,1000);
	//自动轮播
	function move(type){
		type = type || 'right';
		//点击左右键执行
		if(type == 'right'){
			now++;
			if(now == banner.length){
				now = 0;
			}
		}else if(type == 'left'){
			now--;
			if(now == -1){
				now = banner.length-1;
			}
		}
		//图片透明度与轮播点颜色变化
		banner.forEach(function(ele,index){
			ele.style.opacity = 0;
			dian[index].style.background = '#17171c';
		})
		banner[now].style.opacity = 1;
		dian[now].style.background = '#7c7c81';
	}
	//鼠标移入清除时间函数
	bannerBox.onmouseover = function(){
		clearInterval(time);
	}
	//鼠标移出继续调用时间函数
	bannerBox.onmouseout = function(){
		time = setInterval(move,1000);
	}
	//点击轮播点跳转到相应页面
	dian.forEach(function(dele,dindex){
		dele.addEventListener('click',function(){
			banner.forEach(function(bele,bindex){
				bele.style.opacity = 0;
				dian[bindex].style.background = '#17171c';
			})
			banner[dindex].style.opacity = 1;
			this.style.background = '#7c7c81';
			now = dindex;
		})
	});
	//右按钮
	right.onclick = function(){
		move('right');
	}
	//左按钮
	left.onclick = function(){
		move('left');
	}
	//商品展示
	/*1.初始化CSS
		选项卡  display:block;
	2.获取元素
		楼层   .main-box
		标题   .main-word-title
		商品盒子   .household-shop-right
	3.遍历楼层   .main-box
	4.遍历标题  .main-word-title  onmouseover
	5.遍历选项卡  .household-shop-right  
		添加属性 classList.add
		删除属性 classList.remove*/
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

//商品展示————节点轮播
	let bottom = document.querySelector(".star-shop");
	let lbtn = document.querySelector(".star-right1");
	let rbtn = document.querySelector(".star-right2");
	let widths = bottom.firstElementChild.offsetWidth;
	let rights = parseInt(getComputedStyle(bottom.firstElementChild,null).marginRight);
	console.log(rights)
	let count = bottom.childElementCount;
	bottom.style.width = count*(widths + rights) + 'px'; 

	let num = 0;
	rbtn.onclick = function(){
		if(num == 1){
			rbtn.className = 'star-right2';
			lbtn.className = 'star-right1';
			return;
		}
		num++;
		bottom.style.transform = `translateX(${-1226*num}px)`;
	}
	lbtn.onclick = function(){
		if(num == 0){
			rbtn.className = 'star-right2';
			lbtn.className = 'star-right1';
			return;
		}
		num--;
		bottom.style.transform = `translateX(${-1226*num}px)`;
	}

	//为你推荐
	let rbottom = document.querySelector(".recommend-shop");
	let rlbtn = document.querySelector(".r-right1");
	let rrbtn = document.querySelector(".r-right2");
	let rwidths = rbottom.firstElementChild.offsetWidth;
	let rlefts = parseInt(getComputedStyle(rbottom.firstElementChild,null).marginLeft);

	let rcount = rbottom.childElementCount;
	rbottom.style.width = rcount*(rwidths + rlefts) + 'px'; 
	console.log(rwidths,rlefts,rcount)
	let rnum = 0;
	rrbtn.onclick = function(){
		if(rnum == 2){
			rrbtn.className = 'star-right2';
			rlbtn.className = 'star-right1';
			return;
		}
		rnum++;
		rbottom.style.transform = `translateX(${-1240*rnum}px)`;
	}
	rlbtn.onclick = function(){
		if(rnum == 0){
			rrbtn.className = 'star-right2';
			rlbtn.className = 'star-right1';
			return;
		}
		rnum--;
		rbottom.style.transform = `translateX(${-1240*rnum}px)`;
	}
	let neirongbox = document.querySelector('.con-box-box');
	let rightanniu = document.querySelector('.small-box-right');
	let leftanniu = document.querySelector('.small-box-left');
	let neirongboxwidths = neirongbox.firstElementChild.offsetWidth;
	let neirongboxrights = parseInt(getComputedStyle(neirongbox.firstElementChild,null).marginRight);
	let neirongboxcount = neirongbox.childElementCount;
	neirongbox.style.width = neirongboxcount * (neirongboxwidths + neirongboxrights) + 'px';

	let nuu = 0;
	rightanniu.onclick =function(){
		if(nuu == 2){
			rightanniu.style.color = '#ccc';
			return;
		}
		nuu++;
		neirongbox.style.transform = `translateX(${-296*nuu}px)`
	}
	leftanniu.onclick =function(){
		if(nuu == 0){
			leftanniu.style.color = '#ccc';
			return;
		}
		nuu--;
		neirongbox.style.transform = `translateX(${-296*nuu}px)`
	}
	let neirongbox2 = document.getElementsByClassName('con-box-box')[1];
	let rightanniu2 = document.getElementsByClassName('small-box-right')[1];
	let leftanniu2 = document.getElementsByClassName('small-box-left')[1];
	let neirongboxwidths2 = neirongbox2.firstElementChild.offsetWidth;
	let neirongboxrights2 = parseInt(getComputedStyle(neirongbox2.firstElementChild,null).marginRight);
	let neirongboxcount2 = neirongbox2.childElementCount;
	neirongbox2.style.width = neirongboxcount2 * (neirongboxwidths2 + neirongboxrights2) + 'px';

	let nuu2 = 0;
	rightanniu2.onclick =function(){
		if(nuu2 == 2){
			rightanniu2.style.color = '#ccc';
			return;
		}
		nuu2++;
		neirongbox2.style.transform = `translateX(${-296*nuu2}px)`
	}
	leftanniu2.onclick =function(){
		if(nuu2 == 0){
			leftanniu2.style.color = '#ccc';
			return;
		}
		nuu2--;
		neirongbox2.style.transform = `translateX(${-296*nuu2}px)`
	}
	let neirongbox3 = document.getElementsByClassName('con-box-box')[2];
	let rightanniu3 = document.getElementsByClassName('small-box-right')[2];
	let leftanniu3 = document.getElementsByClassName('small-box-left')[2];
	let neirongboxwidths3 = neirongbox3.firstElementChild.offsetWidth;
	let neirongboxrights3 = parseInt(getComputedStyle(neirongbox3.firstElementChild,null).marginRight);
	let neirongboxcount3 = neirongbox3.childElementCount;
	neirongbox3.style.width = neirongboxcount3 * (neirongboxwidths3 + neirongboxrights3) + 'px';

	let nuu3 = 0;
	rightanniu3.onclick =function(){
		if(nuu3 == 2){
			rightanniu3.style.color = '#ccc';
			return;
		}
		nuu3++;
		neirongbox3.style.transform = `translateX(${-296*nuu3}px)`
	}
	leftanniu3.onclick =function(){
		if(nuu3 == 0){
			leftanniu3.style.color = '#ccc';
			return;
		}
		nuu3--;
		neirongbox3.style.transform = `translateX(${-296*nuu3}px)`
	}
	let neirongbox4 = document.getElementsByClassName('con-box-box')[3];
	let rightanniu4 = document.getElementsByClassName('small-box-right')[3];
	let leftanniu4 = document.getElementsByClassName('small-box-left')[3];
	let neirongboxwidths4 = neirongbox4.firstElementChild.offsetWidth;
	let neirongboxrights4 = parseInt(getComputedStyle(neirongbox4.firstElementChild,null).marginRight);
	let neirongboxcount4 = neirongbox4.childElementCount;
	neirongbox4.style.width = neirongboxcount4 * (neirongboxwidths4 + neirongboxrights4) + 'px';

	let nuu4 = 0;
	rightanniu4.onclick =function(){
		if(nuu4 == 2){
			rightanniu4.style.color = '#ccc';
			return;
		}
		nuu4++;
		neirongbox4.style.transform = `translateX(${-296*nuu4}px)`
	}
	leftanniu3.onclick =function(){
		if(nuu3 == 0){
			leftanniu3.style.color = '#ccc';
			return;
		}
		nuu3--;
		neirongbox3.style.transform = `translateX(${-296*nuu3}px)`
	}
}