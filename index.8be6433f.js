function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=s),s("7Th1V");var i=s("2shzp"),l=s("cElPN"),o=(l=s("cElPN"),s("fb9GJ")),r=s("7rYDH");l=s("cElPN");const c=new(0,r.default),u=document.querySelector(".gallery__list");function d(t,a){const n=document.getElementById("tui-pagination-container"),s={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},i=new(e(o))(n,s);i.off("afterMove",(function(e){u.innerHTML="",c.page=e.page,c.getPopularMovies().then((e=>{(0,l.default)(e.data.results)}))})),i.on("afterMove",(function(e){u.innerHTML="",c.page=e.page,c.with_genres=a,c.getGenersMovies().then((e=>{(0,l.default)(e.data.results)}))}))}let p=18;const g="https://api.themoviedb.org/3/discover/movie",f="api_key=102d4305e0abdbf0fd48836d5abb1978";function h(){const e=localStorage.getItem("genres");return JSON.parse(e)}async function m(e){let t=await i.default.get(`${g}?${f}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${e}`);const a=t.data,n=t.status,s=a.results;return 200===n&&s.length>0?(l.gallery.innerHTML="",d(a.total_results,e),a):0}async function v(e){l.gallery.innerHTML="",p=function(e){return h().find((t=>t.name===e)).id}(e);(await m(p)).results.forEach((e=>{const t=(0,l.createMoviesList)(e);l.gallery.insertAdjacentHTML("beforeend",t)}))}!async function(){!function(e){localStorage.setItem("genres",JSON.stringify(e))}((await i.default.get(`https://api.themoviedb.org/3/genre/movie/list?${f}&language=en-US`)).data.genres)}();const y=document.querySelector(".genre-select");h().forEach((e=>{const t=function(e){return`\n  <option class="genre-select__item" value="${e}">${e}</option>\n   `}(e.name);y.insertAdjacentHTML("beforeend",t)})),$(y).each((function(){const e=$(this),t=e.find("option"),a=t.length;t.filter(":selected");e.hide(),e.wrap('<div class="select"></div>'),$("<div>",{class:"new-select",text:e.children("option:disabled").text()}).insertAfter(e);const n=e.next(".new-select");$("<div>",{class:"new-select__list"}).insertAfter(n);const s=n.next(".new-select__list");for(let e=1;e<a;e++)$("<div>",{class:"new-select__item",html:$("<span>",{text:t.eq(e).text()})}).attr("data-value",t.eq(e).val()).appendTo(s);const i=s.find(".new-select__item");s.slideUp(0),n.on("click",(function(){$(this).hasClass("on")?($(this).removeClass("on"),s.slideUp(450)):($(this).addClass("on"),s.slideDown(450),i.on("click",(function(){let e=$(this).data("value");v(e),$("select").val(e).attr("selected","selected"),n.text($(this).find("span").text()),s.slideUp(450),n.removeClass("on")})))}))})),s("hpib5"),s("2ix2C");l=s("cElPN"),r=s("7rYDH"),o=s("fb9GJ"),r=s("7rYDH"),l=s("cElPN");const b=new(0,r.default),_=document.querySelector(".gallery__list");const w=new(0,r.default);document.querySelector(".gallery__list").innerHTML="",w.resetPage(),w.getPopularMovies().then((t=>{(function(t){const a=document.getElementById("tui-pagination-container");let n={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new(e(o))(a,n).on("afterMove",(function(e){_.innerHTML="",b.page=e.page,b.getPopularMovies().then((e=>{(0,l.default)(e.data.results)}))}))})(t.data.total_results),(0,l.default)(t.data.results)})),s("cElPN"),s("6V8C4"),s("fXNf8"),s("fr4JX"),s("4NDtK");
//# sourceMappingURL=index.8be6433f.js.map