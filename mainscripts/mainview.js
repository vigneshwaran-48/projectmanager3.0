let MainView = (() => {
    let domStrings = {
        topSmallImage : ".top-profile-image",
        showFromRightToLeft : "show-from-right-to-left",
        rightSection : ".right-side-sections",
        rightSideCloseButton : "#right-side-section-close-button"
    }
    let getDomStrings = () => domStrings;
    
    return {
        getDomStrings : getDomStrings
    }
})();