// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById('cursor'); 

// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');   
    });
}

$(function(){
    //読み込みが完了したら実行する
    $(window).on('load',function(){
      //ローディングアニメーションをフェードアウト
      $('.loading-container').delay(600).fadeOut(300);
  });
  
    //ページの読み込みが完了してなくても5秒後にアニメーションを非表示にする
    setTimeout(function(){
      $('.loading-container').fadeOut(300);
    },2500);
  });