const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.btn-close');
const dropMenu = document.querySelector('.drop-menu');
const menuLinks = document.querySelectorAll('.drop-menu li a');

if (dropMenu && btnMenu) {
  // 開啟選單
  const openMenu = () => {
    dropMenu.classList.add('active');
  };

  // 關閉選單
  const closeMenu = () => {
    if (dropMenu.classList.contains('active')) {
      dropMenu.classList.remove('active');
    }
  };

  // 綁定開啟按鈕
  btnMenu.addEventListener('click', openMenu);

  // 綁定關閉按鈕（需確認有這個按鈕）
  if (btnClose) {
    btnClose.addEventListener('click', closeMenu);
  }

  // 點擊選單連結時關閉選單
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // 當視窗寬度大於 1100，自動關閉選單
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}