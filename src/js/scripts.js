const articles = [
    {
        initialContent: `(0) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas vitae scel`,
        moreContent: `(0) erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed
        ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
        non fermentum. Sed dapibus pulvinar nibh tempor porta.`
    },
    {
        initialContent: `(1) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas vitae scel`,
        moreContent: `(1) erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed
        ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
        non fermentum. Sed dapibus pulvinar nibh tempor porta.`
    },
    {
        initialContent: `(2) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas vitae scel`,
        moreContent: `(2) erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed
        ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros
        non fermentum. Sed dapibus pulvinar nibh tempor porta.`
    }
];



jQuery(document).ready(() => {

    document.body.innerHTML = document.body.innerHTML + "<div> RABBIT </div>";


    var random = Math.floor(Math.random() * 3) + 1;
    //   console.log(random);
    var imgSlider = document.querySelector(".imgSlider");
    if (random === 2) {
        imgSlider.src = "img/image-" + random + ".jpeg";
    }
    else {
        imgSlider.src = "img/image-" + random + ".jpg";
        this.console.log(imgSlider.src)
    }

    const fillData = (data) => {
        //    console.log(data, 'data fill')


        this.console.log('the data is ...... ', data);
        data.map((item, index) => {
            const html1 = `<span id="text-${index}">${item.initialContent}</span>`
            const html2 = `<span id="more-${index}">${item.moreContent}</span>`
            // console.log(item.initialContent)
            // console.log(data, 'data for fill');
            // console.log(articles, 'article for fill');
            var paragraph = document.querySelector(`.article-${index}`);
            //   this.console.log(paragraph)
            //  debugger;
            $(paragraph).html(html1 + html2);


        })
    }
    const data = [...articles]
    fillData(data);

    const search = (data) => {
        console.log(data, 'data from function')
        //  const mainArray =   [...array]
        const mainArray = data.map(a => ({ ...a }));
        var searchQuery = $("#searchQuery").val().toLowerCase();
        console.log(searchQuery);
        if (searchQuery.length) {

            //   console.log('main array is --------->', mainArray);
            console.log(articles, 'unmodified')
            // $('#searchSection').html(pageContent.split(searchQuery).join("<span class='highlight'>" + searchQuery + "</span>"));
            var newArray = mainArray.map((item, index) => {
                var newDataArray = [].concat(mainArray);
                var newInitialContent = item.initialContent.replace(new RegExp(searchQuery, "g"), "<span class='highlight'>" + searchQuery + "</span>")
                var newMoreContent = item.moreContent.toLowerCase().replace(new RegExp(searchQuery, "g"), "<span class='highlight'>" + searchQuery + "</span>")
                newDataArray[index].initialContent = newInitialContent;
                newDataArray[index].moreContent = newMoreContent;
                //   console.log(newDataArray, '----')
                $("#searchQuery").val('');
                console.log(newDataArray, 'modified array')
                return newDataArray[0];
            });
            console.log(newArray, 'articles array')
            fillData(newArray)
        }


    }

    $('#btnSubmit').click(() => search(articles))




    var pageContent = "Data to be searched"; // ['da','a ','o be searched']

    $("#searchSection").text(pageContent)
})
window.onload = function () {


};





function readMore(moreId, dotsId) {
    $("#" + moreId).toggle();
    $('#' + dotsId).toggle();
}


