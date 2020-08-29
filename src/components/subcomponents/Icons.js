
export class Icons {

    
    static icon_ok () {
      return (
      `<svg version="1.1" id="ok" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="25px" height="25px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
      <g class="icon_fill_normal">
      <polygon points="8.2,21 2.8,14 5,12 8.4,16.8 20.1,3.9 22.2,6 "/></g></svg>`);
    }



    static icon_cancel () {
      return (
      `<svg version="1.1" id="cancel" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	    width="25px" height="25px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
      <g class="icon_fill_normal">
      <polygon points="21.1,6 18.9,3.9 12.3,10.5 5.7,3.9 3.6,6 10.2,12.6 3.6,19.2 5.7,21.3 12.3,14.7 18.9,21.3 21.1,19.2 14.4,12.6 "/></g></svg>`);
    }

    static arrow_down (color) {

        let el = document.createElement("div"); 
        let content = [`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="25px" height="25px";"viewBox="0 0 25 25"> <polygon fill="`,
        color,`" points="3,4 0,0 6,0 "/></svg>`].join("");
        el.innerHTML = content;
        return el;
    }

    static small_arrow_down (color) {

      let el = document.createElement("div"); 
      let content = [`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="25px" height="25px";"viewBox="0 0 25 25"> <polygon fill="`,
      color,`" points="15.5,15 18,10 13,10 "/></svg>`].join("");
      el.innerHTML = content;
      el.setAttribute("class", "icon_container");
      return el;
    }



    static icon_align_left () {
      return (
      `<svg version="1.1" id="left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
      width="25px" height="25px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
      <g class="icon_fill_normal" >
      <path d="M16,5v2H5V5H16z M19,9H5v2h14V9z M15,13H5v2h10V13z M20,17H5v2h15V17z"/></g></svg>`);
    }

    static icon_align_right () {
      return (
      `<svg version="1.1" id="right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
      width="25px" height="25px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
      <g class="icon_fill_normal" >
      <path d="M20,5v2H9V5H20z M6,11h14V9H6V11z M10,15h10v-2H10V15z M5,19h15v-2H5V19z"/></g></svg>`);
    }

    static icon_align_center () {
      return (
      `<svg version="1.1" id="center" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
      width="25px" height="25px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
      <g class="icon_fill_normal" >
      <path d="M17,5v2H8V5H17z M19,9H6v2h13V9z M17,13H8v2h9V13z M20,17H5v2h15V17z"/></g></svg>`);
    }

    static icon_checked () {
      return (
      `<svg version="1.1" id="checked" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="25px" height="25px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
      <g class="icon_fill_normal">
      <polygon points="6.3,17.7 6.3,14.7 5,13 5,19 9.8,19 8.6,17.7"/>
      <polygon points="18.7,17.7 12.2,17.7 10.9,19 20,19 20,9 18.7,10.4"/>
      <polygon points="6.3,6.3 15.1,6.3 16.4,5 5,5 5,10.5 6.3,9.5"/>
      <polygon points="19.1,4.2 10.5,13.7 7.8,10.2 5.9,11.7 10.4,17.4 20.9,5.8"/></g></svg>`);
    }

    static icon_unchecked () {
      return (
      `<svg version="1.1" id="unchecked" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="25px" height="25px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
      <g class="icon_fill_normal">
      <path d="M5,5v14h15V5H5z M18.7,17.7H6.3V6.3h12.4V17.7z"/></g></svg>`);
    }

}

export default Icons;

