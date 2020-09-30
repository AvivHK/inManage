{
    let wordToSearch = ""
    let text = ""
    $('#search').keyup(highlight);

    function highlight() {
        wordToSearch = $("#search").val()
        let regex = new RegExp(wordToSearch, 'g');
        text = $("#text").text()
        let newText = text.replace(regex, '<mark>' + wordToSearch + '</mark>');
        document.getElementById('text').innerHTML = newText;
    }

}