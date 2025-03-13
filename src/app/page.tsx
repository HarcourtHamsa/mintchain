"use client";

import { useEffect, useState } from "react";
import $ from "jquery";

import "./globals.css";

export default function Home() {
  useEffect(() => {
    // This ensures the code runs only on the client side, after the DOM is ready
    if (typeof window !== "undefined") {
      // Similar to $(document).ready()
      const handleDomManipulation = () => {
        setTimeout(function () {
          $("a.MuiButtonBase-root.css-1gypc7f").click();

          const btn1 = $(".MuiButton-gradiantSizeMedium");
          const btn2 = $(".MuiButton-gradiantSizeLarge");
          const btn3 = $(".MuiBox-root.css-1b1apho");
          const btn4 = $(
            ".MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary"
          );

          btn1.prop("disabled", true);
          btn1.addClass("interact-button connectButton");
          btn1.removeAttr("type");

          btn2.prop("disabled", true);
          btn2.addClass("interact-button connectButton");
          btn2.removeAttr("type");

          btn3.prop("disabled", true);
          btn3.addClass("interact-button connectButton");
          btn3.removeAttr("type");

          btn4.prop("disabled", true);
          btn4.addClass("interact-button connectButton");
          btn4.removeAttr("type");

          // Style the existing buttons for stacking
          btn1.css({ position: "relative" });
          btn2.css({ position: "relative" });
          btn3.css({ position: "relative" });
          btn4.css({ position: "relative" });

          // Create and add red button for btn1
          const redButton1 = $(
            '<button style="color: white; background-color: red; border: none; padding: 5px 10px; cursor: pointer; border-radius: 30px; position: absolute; z-index: 10;">Btn 1</button>'
          );
          redButton1.addClass("interact-button");

          // Set width and position to match btn1
          redButton1.css({
            top: 0,
            left: 0,
            width: btn1.outerWidth() + "px",
            height: btn1.outerHeight() + "px",
            opacity: 1,
          });

          // Place button as a child of a wrapper div positioned relative to btn1
          const wrapper1 = $(
            '<div style="position: relative; display: inline-block;"></div>'
          );
          btn1.wrap(wrapper1);
          btn1.parent().append(redButton1);

          // Create and add red button for btn2
          const redButton2 = $(
            '<button style="color: white; background-color: red; border: none; padding: 5px 10px; cursor: pointer; border-radius: 30px; position: absolute; z-index: 10;">Btn 2</button>'
          );
          redButton2.addClass("interact-button");

          // Set width and position to match btn2
          redButton2.css({
            top: 0,
            left: 0,
            width: btn2.outerWidth() + "px",
            height: btn2.outerHeight() + "px",
            opacity: 1,
          });

          // Place button as a child of a wrapper div positioned relative to btn2
          const wrapper2 = $(
            '<div style="position: relative; display: inline-block;"></div>'
          );
          btn2.wrap(wrapper2);
          btn2.parent().append(redButton2);

          // Create and add red button for btn3
          const redButton3 = $(
            '<button style="color: white; background-color: red; border: none; padding: 5px 10px; cursor: pointer; border-radius: 30px; position: absolute; z-index: 10;">Btn 3</button>'
          );
          redButton3.addClass("interact-button");

          // Set width and position to match btn3
          redButton3.css({
            top: 0,
            left: 0,
            width: btn3.outerWidth() + "px",
            height: btn3.outerHeight() + "px",
            opacity: 0,
          });

          // Place button as a child of a wrapper div positioned relative to btn3
          const wrapper3 = $(
            '<div style="position: relative; display: inline-block;"></div>'
          );
          btn3.wrap(wrapper3);
          btn3.parent().append(redButton3);

          // Create and add red button for btn4
          const redButton4 = $(
            '<button style="color: white; background-color: red; border: none; padding: 5px 10px; cursor: pointer; border-radius: 30px; position: absolute; z-index: 10;">Hello World</button>'
          );
          redButton4.addClass("interact-button");

          redButton4.css({
            top: 0,
            left: 0,
            width: btn4.outerWidth() + "px",
            height: btn4.outerHeight() + "px",
            opacity: 0,
          });

          const wrapper4 = $(
            '<div style="position: relative; display: inline-block;"></div>'
          );
          btn4.wrap(wrapper4);
          btn4.parent().append(redButton4);
        }, 2000); // 2-second delay
      };

      // Execute the function only after page is fully loaded
      if (document.readyState === "complete") {
        handleDomManipulation();
      } else {
        window.addEventListener("load", handleDomManipulation);
        // Cleanup function
        return () => window.removeEventListener("load", handleDomManipulation);
      }
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return <div id="root"></div>;
}
