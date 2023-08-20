const showMore = () => {
  document.getElementById("intro").innerHTML =
    "<p>I'm Arun, currently working as a Software Engineer II at <a href='https://www.caratlane.com/'>CaratLane</a>. I'm a front-end developer and UI/UX enthusiast with a passion for crafting captivating user experiences. Experienced in React, Javascript, LightningJS, CSS, and HTML, I bring life to pixels. Beyond code, I adore  graphic design and have a tech obsession, from PCs to gadgets and video  games. Let's reshape the digital world together! Oh, and a little  secret: ChatGPT was kind enough to assist with this intro - UI genius, not a writing whiz<p/>";
};
const showLess = () => {
  document.getElementById("intro").innerHTML =
    "<p>I'm Arun, currently working as a Software Engineer II at <a href='https://www.caratlane.com/'>CaratLane</a>. I'm a front-end developer and UI/UX enthusiast with a passion for crafting captivating user experiences...</p>";
};
document.getElementById("intro").addEventListener("focus", showMore);
document.getElementById("intro").addEventListener("blur", showLess);
