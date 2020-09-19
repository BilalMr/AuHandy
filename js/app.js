const allFilter = document.querySelector(".all-filter");
allFilter.classList.add("active-filter");

const plumbingFilter = document.querySelector(".plumbing-filter");
const paintFilter = document.querySelector(".paint-filter");
const engineFilter = document.querySelector(".engine-filter");
const electricalFilter = document.querySelector(".electrical-filter");
const repairFilter = document.querySelector(".repair-filter");

const allFilters = [
  plumbingFilter,
  paintFilter,
  engineFilter,
  electricalFilter,
  repairFilter,
  allFilter,
];

plumbingFilter.addEventListener("click", () => {
  selectFilter("plumbing");
  removeFilters();
  plumbingFilter.classList.add("active-filter");
});

paintFilter.addEventListener("click", () => {
  selectFilter("paint");
  removeFilters();
  paintFilter.classList.add("active-filter");
});

engineFilter.addEventListener("click", () => {
  selectFilter("engine");
  removeFilters();
  engineFilter.classList.add("active-filter");
});

electricalFilter.addEventListener("click", () => {
  selectFilter("electrical");
  removeFilters();
  electricalFilter.classList.add("active-filter");
});

repairFilter.addEventListener("click", () => {
  selectFilter("repair-house");
  removeFilters();
  repairFilter.classList.add("active-filter");
});

allFilter.addEventListener("click", () => {
  selectFilter("");
  removeFilters();
  allFilter.classList.add("active-filter");
});

const projects = document.querySelectorAll(".project");
const selectFilter = (service) => {
  projects.forEach((project) => {
    if (!project.classList.value.includes(service)) {
      project.classList.add("hide");
    } else {
      project.classList.remove("hide");
    }
  });
};

const removeFilters = () => {
  allFilters.forEach((filter) => filter.classList.remove("active-filter"));
};
