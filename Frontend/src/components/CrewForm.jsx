import React, { useState } from "react";

function CrewForm() {
  const [formData, setFormData] = useState({
    canSwim: "",
    swimLevel: "",
    sailingExperience: "",
    sailingKind: "",
    seasick: "",
    padiCertified: "",
    machineryExperience: "",
    dietaryPreference: "",
    dietaryDetails: "",
    allergies: "",
    medicalHistory: "",
    eyesightHearing: "",
    firstAidTraining: "",
    smoking: "",
    drinking: "",
    photographyExperience: "",
    videoEditingExperience: "",
    onboardTasks: "",
    expectations: "",
    additionalInfo: "",
    nokName: "",
    nokContact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Form data submitted:", formData);
  };

  const INPUT_FIELDS =
    "bg-transparent border border-[#F6F1F1] w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#752220] mt-2";

  return (
    <div
      id="crewform"
      className="flex w-full min-h-screen justify-center items-center relative px-4 sm:px-8 py-8 text-center"
    >
      <div className="flex flex-col md:flex-col bg-[#752220] w-full max-w-4xl p-6 sm:p-8 rounded-xl shadow-lg text-[#F6F1F1] mt-8 sm:mt-[100px] relative z-10 space-y-6 md:space-y-6 md:space-x-0">
        <div className="flex flex-col space-y-6 justify-between md:w-full">
          <h1 className="font-bold text-3xl md:text-4xl tracking-wide text-[#F6F1F1]">
            Join the Crew!
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
          >
            {/* Can you swim? */}
            <div>
              <label className="text-sm">Can you swim?</label>
              <div className="radio-group space-x-2">
                <label>
                  <input
                    type="radio"
                    name="canSwim"
                    value="yes"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="canSwim"
                    value="no"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
              {formData.canSwim === "yes" && (
                <input
                  type="text"
                  name="swimLevel"
                  placeholder="How well?"
                  onChange={handleChange}
                  className={INPUT_FIELDS}
                />
              )}
            </div>

            {/* Sailing Experience */}
            <div>
              <label className="text-sm">
                Do you have any sailing experience?
              </label>
              <div className="radio-group space-x-2">
                <label>
                  <input
                    type="radio"
                    name="sailingExperience"
                    value="yes"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="sailingExperience"
                    value="no"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
              {formData.sailingExperience === "yes" && (
                <input
                  type="text"
                  name="sailingKind"
                  placeholder="What kind?"
                  onChange={handleChange}
                  className={INPUT_FIELDS}
                />
              )}
            </div>

            {/* Seasick */}
            <div>
              <label className="text-sm">Are you seasick?</label>
              <div className="radio-group space-x-2">
                <label>
                  <input
                    type="radio"
                    name="seasick"
                    value="yes"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="seasick"
                    value="no"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {/* PADI Certification */}
            <div>
              <label className="text-sm">Are you a PADI-certified diver?</label>
              <div className="radio-group space-x-2">
                <label>
                  <input
                    type="radio"
                    name="padiCertified"
                    value="yes"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="padiCertified"
                    value="no"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {/* Machinery Experience */}
            <div>
              <label className="text-sm">
                Do you have any experience with machinery and electrical
                equipment?
              </label>
              <div className="radio-group space-x-2">
                <label>
                  <input
                    type="radio"
                    name="machineryExperience"
                    value="yes"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="machineryExperience"
                    value="no"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {/* Dietary Preference */}
            <div>
              <label className="text-sm">Dietary preference?</label>
              <div className="radio-group space-x-2 mt-2">
                <label>
                  <input
                    type="radio"
                    name="dietaryPreference"
                    value="veg"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Veg
                </label>
                <label>
                  <input
                    type="radio"
                    name="dietaryPreference"
                    value="non-veg"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Non-Veg
                </label>
              </div>
              {formData.dietaryPreference === "non-veg" && (
                <input
                  type="text"
                  name="dietaryDetails"
                  placeholder="Specify (e.g., Chicken, Beef)"
                  onChange={handleChange}
                  className={INPUT_FIELDS}
                />
              )}
            </div>

            {/* Allergies */}
            <div>
              <label className="text-sm">
                Do you have any known allergies?
              </label>
              <input
                type="text"
                name="allergies"
                onChange={handleChange}
                className={INPUT_FIELDS}
              />
            </div>

            {/* Medical History */}
            <div>
              <label className="text-sm">
                Medical or psychological history?
              </label>
              <input
                type="text"
                name="medicalHistory"
                onChange={handleChange}
                className={INPUT_FIELDS}
              />
            </div>

            {/* Eyesight and Hearing */}
            <div>
              <label className="text-sm">
                Good eyesight and hearing (for watchkeeping)?
              </label>
              <div className="radio-group space-x-2">
                <label>
                  <input
                    type="radio"
                    name="eyesightHearing"
                    value="yes"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="eyesightHearing"
                    value="no"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {/* First Aid Training */}
            <div>
              <label className="text-sm">First-aid training?</label>
              <div className="radio-group space-x-2">
                <label>
                  <input
                    type="radio"
                    name="firstAidTraining"
                    value="yes"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="firstAidTraining"
                    value="no"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {/* Smoking */}
            <div>
              <label className="text-sm">Do you smoke?</label>
              <div className="radio-group space-x-2">
                <label>
                  <input
                    type="radio"
                    name="smoking"
                    value="yes"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="smoking"
                    value="no"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {/* Drinking */}
            <div>
              <label className="text-sm">
                Do you drink (beer/wine/alcohol)?
              </label>
              <div className="radio-group space-x-2">
                <label>
                  <input
                    type="radio"
                    name="drinking"
                    value="yes"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="drinking"
                    value="no"
                    onChange={handleChange}
                    className="mr-2"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {/* Photography Experience */}
            <div>
              <label className="text-sm">Photography experience?</label>
              <input
                type="text"
                name="photographyExperience"
                onChange={handleChange}
                className={INPUT_FIELDS}
              />
            </div>

            {/* Video Editing Experience */}
            <div>
              <label className="text-sm">Experience in video editing?</label>
              <input
                type="text"
                name="videoEditingExperience"
                onChange={handleChange}
                className={INPUT_FIELDS}
              />
            </div>

            {/* Suitable Tasks */}
            <div>
              <label className="text-sm">
                If you have seen our videos, which tasks would you be suitable
                for?
              </label>
              <input
                type="text"
                name="onboardTasks"
                onChange={handleChange}
                className={INPUT_FIELDS}
              />
            </div>

            {/* Expectations */}
            <div>
              <label className="text-sm">
                What do you expect from this experience?
              </label>
              <input
                type="text"
                name="expectations"
                onChange={handleChange}
                className={INPUT_FIELDS}
              />
            </div>

            {/* Additional Information */}
            <div>
              <label className="text-sm">
                Any other info that you'd like to share?
              </label>
              <input
                type="text"
                name="additionalInfo"
                onChange={handleChange}
                className={INPUT_FIELDS}
              />
            </div>

            {/* Next of Kin */}
            <div>
              <label className="text-sm">Who would be your NoK?</label>
              <input
                type="text"
                name="nokName"
                onChange={handleChange}
                className={INPUT_FIELDS}
              />
              <input
                type="text"
                name="nokContact"
                placeholder="NoK Contact Number"
                onChange={handleChange}
                className={INPUT_FIELDS}
              />
            </div>

            <button
              type="submit"
              className="text-[#752220] bg-[#F6F1F1] rounded-md px-4 py-2 font-bold md:text-2xl transition duration-200 sm:w-auto"
            >
              Aye Aye, Captain!!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrewForm;
