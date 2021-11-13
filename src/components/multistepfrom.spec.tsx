import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import MultiStepForm from "./multistepform";
import user from "@testing-library/user-event";

describe("MultiStepForm", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it("onSubmit is called when all fields pass validation", async () => {
    render(<MultiStepForm onSubmit={onSubmit} />);
    //First Page
    user.type(getFirstName(), "Deniz");
    user.type(getLastName(), "Özoğul");
    user.click(getWizardCheck());

    clickNextButton();

    //Second Page
    user.type(await getSpell(), "Expelliarmus");

    clickNextButton();

    //Third Page
    user.type(await getDescription(), "I am not Harry btw !");

    clickSubmitButton();

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        firstName: "Deniz",
        lastName: "Özoğul",
        wizard: true,
        magic: "Expelliarmus",
        description: "I am not Harry btw !",
      });
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("has 3 required fields on first step", async () => {
    render(<MultiStepForm onSubmit={onSubmit} />);

    clickNextButton();
    await waitFor(() => {
      expect(getFirstName()).toHaveErrorMessage(
        "firstName is a required field"
      );

      //Bunu da kullanabilirim ama not bp
      // expect(
      //   screen.getByText(/firstname is a required field/i)
      // ).toBeInTheDocument();
    });

    expect(getLastName()).toHaveErrorMessage("lastName is a required field");

    expect(getWizardCheck()).toHaveErrorMessage("You must to be wizard");
  });
});

function getFirstName() {
  return screen.getByRole("textbox", {
    name: /first name/i,
  });
}

function getLastName() {
  return screen.getByRole("textbox", {
    name: /last name/i,
  });
}

function getWizardCheck() {
  return screen.getByRole("checkbox", {
    name: /are you wizard \?/i,
  });
}

function clickNextButton() {
  user.click(
    screen.getByRole("button", {
      name: /next/i,
    })
  );
}

async function getSpell() {
  return await screen.findByRole("textbox", {
    name: /write a spell/i,
  });
}

async function getDescription() {
  return await screen.findByRole("textbox", {
    name: /description/i,
  });
}

function clickSubmitButton() {
  user.click(
    screen.getByRole("button", {
      name: /submit/i,
    })
  );
}
