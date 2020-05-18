// Main

// code courtesy of https://www.w3schools.com/howto/howto_js_read_more.asp
function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


// Resume

$(".resumeYear").on("click", function() {
    const year = $(this).html();
    console.log(year)
    const classCheck = $(this).hasClass("colouredText");
    console.log(classCheck);

    const twentyNineteen = `
        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Data Analyst</h3>
                        <p class="colouredText">RE/MAX</p>
                    </div>
                </div>
                <p class="lightText">Building a custom database based on the Toronto housing market</p>
            </div>
        </li>
        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Opertations Associate</h3>
                        <p class="colouredText">Focus Asset Management</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of Pooled Funds</p>
            </div>
        </li>
    `; 

    const twentyEighteen = `

        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Opertations Associate</h3>
                        <p class="colouredText">Focus Asset Management</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of Pooled Funds</p>
            </div>
        </li>
        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Specialty/Pricing Team</h3>
                        <p class="colouredText">IA Clarington</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of Mutual Fund accounts</p>
            </div>
        </li>
    `;









    $(".roles").empty()

    if (year === "2019") {
        $(".roles").append(twentyNineteen);
        $(this).toggleClass("colouredText")


        // need an if statement to check all other years in order to toggle button highlight
        if ($(".year").hasClass("colouredText")) {
            $(".year").toggleClass("colouredText");
        }

    } else if (year === "2018") {
        $(".roles").append(twentyEighteen);
        $(this).toggleClass("colouredText")

        if ($(".yearOne, .yearThree, .yearFour, .yearFive").hasClass("colouredText")) {
            $(".yearOne, .yearThree, .yearFour, .yearFive").toggleClass("colouredText");
        }
    }

    // if (classCheck === true) {
    //     $(this).toggleClass("colouredText", false)

    // }
    // if ($(this).hasClass("colouredText") {
        
    // }



})

// Portfolio