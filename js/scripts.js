// Main

// code courtesy of https://www.w3schools.com/howto/howto_js_read_more.asp
// function myFunction() {
//     const dots = document.getElementById("dots");
//     const moreText = document.getElementById("more");
//     const btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// Resume

$(".resumeYear").on("click", function() {
    const year = $(this).html();

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

    const twentySeventeen = `

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

    const twentySixteen = `

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

    const twentyFifteen = `

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

    const twentyFourteen = `

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
        <li>
            <div class="jobTitle">
                <div class="jobTitleSub">
                    <div class="jobSubImg">
                        <i class="fas fa-pencil-alt colouredText"></i>
                    </div>
                    <div>
                        <h3>Real Estate Admin/Tech Support</h3>
                        <p class="colouredText">Coldwell Case Realty</p>
                    </div>
                </div>
                <p class="lightText">Managed the day to day operation of realtor clients need. Tech support for the office.</p>
            </div>
        </li>
    `;



    $(".roles").empty()

    if (year === "2019") {
        $(".roles").append(twentyNineteen);
        $(this).toggleClass("colouredText")
        $(".colourHighlightOne").toggleClass("colourHighlightShow")

        if ($(".yearTwo").hasClass("colouredText")) {
            $(".yearTwo").toggleClass("colouredText");
            $(".colourHighlightTwo").toggleClass("colourHighlightShow");
        } else if ($(".yearThree").hasClass("colouredText")) {
            $(".yearThree").toggleClass("colouredText");
            $(".colourHighlightThree").toggleClass("colourHighlightShow");
        } else if ($(".yearFour").hasClass("colouredText")) {
            $(".yearFour").toggleClass("colouredText");
            $(".colourHighlightFour").toggleClass("colourHighlightShow");
        } else if ($(".yearFive").hasClass("colouredText")) {
            $(".yearFive").toggleClass("colouredText");
            $(".colourHighlightFive").toggleClass("colourHighlightShow");
        } else if ($(".yearSix").hasClass("colouredText")) {
            $(".yearSix").toggleClass("colouredText");
            $(".colourHighlightSix").toggleClass("colourHighlightShow");
        }
        } else if (year === "2018") {
            $(".roles").append(twentyEighteen);
            $(this).toggleClass("colouredText")
            $(".colourHighlightTwo").toggleClass("colourHighlightShow")

            if ($(".yearOne").hasClass("colouredText")) {
                $(".yearOne").toggleClass("colouredText");
                $(".colourHighlightOne").toggleClass("colourHighlightShow");
            } else if ($(".yearThree").hasClass("colouredText")) {
                $(".yearThree").toggleClass("colouredText");
                $(".colourHighlightThree").toggleClass("colourHighlightShow");
            } else if ($(".yearFour").hasClass("colouredText")) {
                $(".yearFour").toggleClass("colouredText");
                $(".colourHighlightFour").toggleClass("colourHighlightShow");
            } else if ($(".yearFive").hasClass("colouredText")) {
                $(".yearFive").toggleClass("colouredText");
                $(".colourHighlightFive").toggleClass("colourHighlightShow");
            } else if ($(".yearSix").hasClass("colouredText")) {
                $(".yearSix").toggleClass("colouredText");
                $(".colourHighlightSix").toggleClass("colourHighlightShow");
            }
        } else if (year === "2017") {
            $(".roles").append(twentySeventeen);
            $(this).toggleClass("colouredText")
            $(".colourHighlightThree").toggleClass("colourHighlightShow")

            if ($(".yearOne").hasClass("colouredText")) {
                $(".yearOne").toggleClass("colouredText");
                $(".colourHighlightOne").toggleClass("colourHighlightShow");
            } else if ($(".yearTwo").hasClass("colouredText")) {
                $(".yearTwo").toggleClass("colouredText");
                $(".colourHighlightTwo").toggleClass("colourHighlightShow");
            } else if ($(".yearFour").hasClass("colouredText")) {
                $(".yearFour").toggleClass("colouredText");
                $(".colourHighlightFour").toggleClass("colourHighlightShow");
            } else if ($(".yearFive").hasClass("colouredText")) {
                $(".yearFive").toggleClass("colouredText");
                $(".colourHighlightFive").toggleClass("colourHighlightShow");
            } else if ($(".yearSix").hasClass("colouredText")) {
                $(".yearSix").toggleClass("colouredText");
                $(".colourHighlightSix").toggleClass("colourHighlightShow");
            }
        } else if (year === "2016") {
            $(".roles").append(twentySixteen);
            $(this).toggleClass("colouredText")
            $(".colourHighlightFour").toggleClass("colourHighlightShow")

            if ($(".yearOne").hasClass("colouredText")) {
                $(".yearOne").toggleClass("colouredText");
                $(".colourHighlightOne").toggleClass("colourHighlightShow");
            } else if ($(".yearTwo").hasClass("colouredText")) {
                $(".yearTwo").toggleClass("colouredText");
                $(".colourHighlightTwo").toggleClass("colourHighlightShow");
            } else if ($(".yearThree").hasClass("colouredText")) {
                $(".yearThree").toggleClass("colouredText");
                $(".colourHighlightThree").toggleClass("colourHighlightShow");
            } else if ($(".yearFive").hasClass("colouredText")) {
                $(".yearFive").toggleClass("colouredText");
                $(".colourHighlightFive").toggleClass("colourHighlightShow");
            } else if ($(".yearSix").hasClass("colouredText")) {
                $(".yearSix").toggleClass("colouredText");
                $(".colourHighlightSix").toggleClass("colourHighlightShow");
            }
        } else if (year === "2015") {
            $(".roles").append(twentyFifteen);
            $(this).toggleClass("colouredText")
            $(".colourHighlightFive").toggleClass("colourHighlightShow")

            if ($(".yearOne").hasClass("colouredText")) {
                $(".yearOne").toggleClass("colouredText");
                $(".colourHighlightOne").toggleClass("colourHighlightShow");
            } else if ($(".yearTwo").hasClass("colouredText")) {
                $(".yearTwo").toggleClass("colouredText");
                $(".colourHighlightTwo").toggleClass("colourHighlightShow");
            } else if ($(".yearThree").hasClass("colouredText")) {
                $(".yearThree").toggleClass("colouredText");
                $(".colourHighlightThree").toggleClass("colourHighlightShow");
            } else if ($(".yearFour").hasClass("colouredText")) {
                $(".yearFour").toggleClass("colouredText");
                $(".colourHighlightFour").toggleClass("colourHighlightShow");
            } else if ($(".yearSix").hasClass("colouredText")) {
                $(".yearSix").toggleClass("colouredText");
                $(".colourHighlightSix").toggleClass("colourHighlightShow");
            }
        } else if (year === "2014") {
            $(".roles").append(twentyFourteen);
            $(this).toggleClass("colouredText")
            $(".colourHighlightSix").toggleClass("colourHighlightShow")

            if ($(".yearOne").hasClass("colouredText")) {
                $(".yearOne").toggleClass("colouredText");
                $(".colourHighlightOne").toggleClass("colourHighlightShow");
            } else if ($(".yearTwo").hasClass("colouredText")) {
                $(".yearTwo").toggleClass("colouredText");
                $(".colourHighlightTwo").toggleClass("colourHighlightShow");
            } else if ($(".yearThree").hasClass("colouredText")) {
                $(".yearThree").toggleClass("colouredText");
                $(".colourHighlightThree").toggleClass("colourHighlightShow");
            } else if ($(".yearFour").hasClass("colouredText")) {
                $(".yearFour").toggleClass("colouredText");
                $(".colourHighlightFour").toggleClass("colourHighlightShow");
            } else if ($(".yearFive").hasClass("colouredText")) {
                $(".yearFive").toggleClass("colouredText");
                $(".colourHighlightFive").toggleClass("colourHighlightShow");
            }
        }

})

// Portfolio