// Write your JavaScript code.
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#sidebarCollapse .fa').toggleClass('fa-chevron-left fa-chevron-right');
        $('#sidebarCollapse').toggleClass('left-chev right-chev');
    });
    if ($('ul.list-unstyled.collapse li').click(function () {
        $(this).addClass('menu-li').siblings().removeClass('menu-li');
    }));
    if ($('ul.list-unstyled.collapse li').click(function () {
        if ($(this).parent('ul').parent('li').siblings().children().children().hasClass('menu-li')) {
            $(this).parent('ul').parent('li').siblings().children().children().removeClass('menu-li');
            //$(this).parent('ul').parent('li').siblings().children('a').attr('aria-expanded', 'false');
        }
    }));
    $('body').on('click', '.chrome-tab-current', function () {
        //debugger;
        if ($('#tabs > .chrome-tab-current:contains("Open Order")').length > 0) {
            $('[id*=site_summary]').hide();
            $('[id*=site_content]').hide();
        }

    });
    $('#open').click(function () {
        //debugger;
        $('[id*=site_summary]').hide();
        $('[id*=site_content]').hide();
    });

    
});
// PLUGIN FOR PAGE and VIEW LOADER / SPINNER INSTRUCTIONS
//startSpinner(); initializes the spinner
//stopSpinner(); removes it after the view loads

//For page / view loads:
// -To initialize it add startSpinner(); in the click event under _MainTabs.cshtml that calls the sendcurrenttabinfo function.
// -To remove after page loads add stopSpinner(); at the top or at the bottom of the cshtml within a < script > tag

//For loading changes that updates data on the view through ajax:
// -Initialize the startSpinner() under the parent click event of the ajax call.
// -To stop the spinner, add stopSpinner() in the success function of the ajax call.

function startSpinner() {
    $('#spinnerDiv').append('<div id="Spinner"><img id="loader1" class="ribbon-loader" src= "/images/Content/ribbon_comm_trans_loader.png" /><div class="load-text">Loading...</div><img id="loader2" class="buzzlightyear" src="/images/to-infinity-and-beyond-gif.gif" style="display:none" /></div >');
        
    var rotate = function () {
        $("#Spinner")
            .delay(0).queue(function () {
                $(this).children('#loader1, .load-test').show();
                $(this).dequeue();
            })
            .delay(58000).queue(function () {
                $(this).children('#loader1, .load-test').hide();
                $(this).dequeue();
            })
            .delay(0).queue(function () {
                $(this).children('#loader2').show();
                $(this).dequeue();

            })
            .delay(2000).queue(function (next) {
                $(this).children('#loader2').hide();
                $(this).dequeue();
                next();
            })
            .queue(rotate);
    };
    rotate();
}
function stopSpinner() {
    $('#Spinner').remove();
}

//function for cell color change when Eqpt Extno for same Equipment PEC on Provisioning view is different from the value in the Ext No field in the Order Summary
function extNumberCellVal() {
    var extNo_contents = $('[id*="site_summary"] #framesGridNew tbody tr td:eq(4)').text().trim();

    $(".dataTables_scrollBody table tbody tr").each(function () {
        if (!($(this).find('td:eq(13)').text().trim() === extNo_contents)) {
            //change background color of cell Extno that is not the same value as the site_summary Ext No variable extNo_contents
            $(this).find('td:eq(13)').css('background-color', 'rgba(252, 3, 3, 0.20)');
        } else {
            //do nothing
        }
    });
    
}

