function toggleMenu() {
  let menu = document.getElementById("menu");
  if (menu.style.display === "flex") menu.style.display = "none";
  else menu.style.display = "flex";
}

function showMessage() {
  let box = document.getElementById("messageBox");
  box.style.display = "block";
  box.style.color = "#0b3d21";
  box.style.fontWeight ="bold"
  box.innerHTML = "أهلاً بكم في مدينة ينبع، لؤلؤة البحر الأحمر وأحد أجمل مدن المملكة العربية السعودية 🌴";
}

function showDiscover() {
  let box = document.getElementById("messageBox");
  box.style.display = "block";
  box.style.color = "#0E4D64";
  box.style.fontWeight ="bold"
  box.innerHTML = "ينبع من أهم مدن المملكة حيث تجمع بين الجمال الطبيعي والتطور الصناعي والسياحي 🌊";
}

function showMore() {
  let box = document.getElementById("extraContent");
  box.style.display = "block";
  box.classList.add("active");
  
  box.innerHTML = `
    <h2 class="highlight-text" style="color:#00BFFF;">مدينة ينبع</h2>
    <p class="highlight-text" style="color:#FF7F50;">
      تُعد مدينة ينبع من أجمل مدن المملكة حيث تتميز بشواطئها الساحرة ومشاريعها السياحية الحديثة🌅
    </p>
    <img src="M/S" alt="مدينة ينبع">
    <button onclick="closeBox()" class="btn close-btn">إغلاق</button>
  `;
}

function showSection(section) {
  let content = document.getElementById("dynamicContent");
  let htmlContent = "";
  
  if (section === "home") {
    htmlContent = `
      <h2>مرحبًا بك في ينبع</h2>
      <p>مدينة ساحلية رائعة على البحر الأحمر تجمع بين الجمال الطبيعي والتطور.</p>
      <button onclick="closeBox()" class="btn close-btn">إغلاق</button>
    `;
  } else if (section === "sunset") {
    htmlContent = `
      <h2>شاطئ الغروب</h2>
      <p>من أجمل الشواطئ حيث يلتقي لون السماء مع البحر.</p>
      <img src="M/i" alt="شاطئ الغروب">
      <button onclick="closeBox()" class="btn close-btn">إغلاق</button>
    `;
  } else if (section === "waterfront") {
    htmlContent = `
      <h2>الواجهة البحرية</h2>
      <p>ممشى جميل بإطلالة مباشرة على البحر.</p>
      <img src="M/r" alt="الواجهة البحرية">
      <button onclick="closeBox()" class="btn close-btn">إغلاق</button>
    `;
  } else if (section === "corniche") {
    htmlContent = `
      <h2>كورنيش ينبع</h2>
      <p>مكان مثالي للتنزه والاستمتاع بالأجواء البحرية.</p>
      <img src="M/a" alt="كورنيش ينبع">
      <button onclick="closeBox()" class="btn close-btn">إغلاق</button>
    `;
  } else if (section === "royal") {
    htmlContent = `
      <h2>شاطئ الهيئة الملكية</h2>
      <p>من أنظف وأجمل الشواطئ في ينبع.</p>
      <img src="M/l" alt="شاطئ الهيئة الملكية">
      <button onclick="closeBox()" class="btn close-btn">إغلاق</button>
    `;
  }
  
  content.innerHTML = htmlContent;
  content.style.display = "block";
}

function closeBox() {
  let box = document.getElementById("extraContent");
  let content = document.getElementById("dynamicContent");
  box.style.display = "none";
  box.classList.remove("active");
  content.style.display = "none";
}
