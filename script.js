<button id="scroll">Scroll to Top</button>


<script>
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListner('click',() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
</script>