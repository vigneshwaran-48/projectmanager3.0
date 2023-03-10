let MainController = ((view) => {

    let init = () => {
        //Adding this listener for right side section
        _(view.getDomStrings().topSmallImage).addEventListener("click", event => {
            _(view.getDomStrings().rightSection).classList.toggle(view.getDomStrings().showFromRightToLeft);
        });

        //This is for closing right side section
        _(view.getDomStrings().rightSideCloseButton).addEventListener("click", event => {
            _(view.getDomStrings().rightSection).classList.remove(view.getDomStrings().showFromRightToLeft);
        })
    }
    init();
})(MainView);