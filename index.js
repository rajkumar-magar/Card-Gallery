let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleNextClick = () => {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "active";

    setTimeout(() => {
        currentGroup.dataset.status = "undefined";
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    }, 300); 
};

const forwardButton = document.getElementById("forward-button");
forwardButton.addEventListener("click", handleNextClick);
