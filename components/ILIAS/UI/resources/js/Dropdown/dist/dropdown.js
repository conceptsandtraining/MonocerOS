/**
 * This file is part of ILIAS, a powerful learning management system
 * published by ILIAS open source e-Learning e.V.
 *
 * ILIAS is licensed with the GPL-3.0,
 * see https://www.gnu.org/licenses/gpl-3.0.en.html
 * You should have received a copy of said license along with the
 * source code, too.
 *
 * If this is not the case or you just want to try ILIAS, you'll find
 * us at:
 * https://www.ilias.de
 * https://github.com/ILIAS-eLearning
 */
!function(t){"use strict";class e{#t;#e;#i;#n;#s;#o;constructor(t){if(this.#e=t,this.#t=t.ownerDocument,this.#s=this.#t.querySelector(".il-mainbar-slates"),this.#o=this.#t.querySelector(".il-mainbar"),this.#i=this.#e.querySelector(":scope > button"),null===this.#i)throw new Error("Dropdown: Expected exactly one button in dropdown element.",this.#e);if(this.#n=this.#e.querySelector(".dropdown-menu"),null===this.#n)throw new Error("Dropdown: Expected a dropdown element.",this.#e);this.#i.addEventListener("click",this.#h)}#l=t=>{27===t.key&&this.hide()};#h=t=>{t.stopPropagation(),this.show()};#d=()=>{this.hide()};#r=t=>{this.#e.contains(t.relatedTarget)||this.hide()};#c=()=>{if(this.#s&&this.#s.contains(this.#e)){const t=this.#i.getBoundingClientRect().left-this.#o.clientWidth;this.#n.style.width=`${String(this.#s.clientWidth)}px`,this.#n.style.left=`${String(-t)}px`}else{const t=this.#t.documentElement.clientWidth;this.#i.getBoundingClientRect().left+this.#n.getBoundingClientRect().width>t?(this.#n.classList.remove("dropdown-menu__right"),this.#n.classList.add("dropdown-menu__left")):(this.#n.classList.remove("dropdown-menu__left"),this.#n.classList.add("dropdown-menu__right"))}};show(){il.UI.dropdown.opened?.hide(),il.UI.dropdown.opened=this,this.#n.style.display="block",this.#c(),this.#i.setAttribute("aria-expanded","true"),this.#t.addEventListener("keydown",this.#l),this.#t.addEventListener("click",this.#d),this.#e.addEventListener("focusout",this.#r),this.#i.removeEventListener("click",this.#h)}hide(){this.#n.style.display="none",this.#i.setAttribute("aria-expanded","false"),this.#t.removeEventListener("keydown",this.#l),this.#t.removeEventListener("click",this.#d),this.#e.removeEventListener("focusout",this.#r),this.#i.addEventListener("click",this.#h)}}t.UI=t.UI||{},t.UI.dropdown={},t.UI.dropdown.opened=null,t.UI.dropdown.init=function(t){return new e(t)}}(il);
