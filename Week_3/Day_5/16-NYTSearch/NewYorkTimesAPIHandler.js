function NewYorkTimesAPIHandler() {

    this.query;
    this.start = false;
    this.end = false;
    this.limit = 0;
    this.apikey = "96d6eb1999674508b7d08f3ec0647a40";
    this.url;
    this.constructURL = function () {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + this.apikey;
        url += "&q=" + this.query;
        if (this.start !== false) {
            url += "&begin_date=" + this.formatDate(this.start);
        }

        if (this.end !== false) {
            url += "&end_date=" + this.formatDate(this.end);
        }
        this.url = url;
    }
    // AJAX STUFFS

    this.apiRequest = function () {
        var url = this.url;
        var limit = this.limit;
        $.ajax({
            url: url,
            method: "GET"
        }).done(function (response) {
             for (var i = 0; i < limit; i++) {
                var article = response.response.docs[i];
                  var html = "<div class='result-container'>"
                html += "<div class='result-header'>"
                html += "<div class='result-number'>"
                html += i + 1;
                html += "</div>"
                html += "<h3>"
                html += article.headline.main;
                html += "</h3>"
                html += "</div>"
                html += "<div class='result-author'>"
                html += article.byline.original;
                html += "</div>"
                html += "</div>"
                $(".results").append(html);
            }

        });
    }


    // HELPER FUNCTIONS
    this.formatDate = function (datestring) {
        var milliseconds = Date.parse(datestring);
        var date = new Date(+milliseconds);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var format = year + "" + this.pad(month, 2) + "" + this.pad(day, 2);
        return format;
    }

    this.pad = function (num, size) {
        var s = num + "";
        while (s.length < size)
            s = "0" + s;
        return s;
     }

    this.clear = function () {
        this.start = false;
        this.end = false;
        this.query = "";
        this.limit = "";
        this.url = "";
    }
}

$(function () {
    helper = new NewYorkTimesAPIHandler();

    $("#search-button").click(function (e) {
 e.preventDefault();

        var query = $("#search-term").val();
        var limit = $("#number-of-records-to-retrieve").val();
        var start = $("#start").val();
        var end = $("#end").val();

        if (start !== "" && start !== null) {
            helper.start = start;
        }
        if (end !== "" && end !== null) {
            helper.end = end;
        }

 
        helper.query = query;
        helper.limit = parseInt(limit);

        helper.constructURL();

        helper.apiRequest();

    });


    $("#clear-results-button").click(function (e) {
e.preventDefault();
        helper.clear();

    });

});