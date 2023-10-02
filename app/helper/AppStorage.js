import AsyncStorage from "@react-native-async-storage/async-storage";

export async function addResume(details) {
  var timestamp = Number(new Date()); // current time as number
  const value = { id: timestamp, details: details };
  console.log("value => ", value);

  var userResume = await getResumes();
  var resumes = userResume?.items ?? [];

  var otherItems = resumes.filter((x) => x?.id !== value.id);
  resumes = [...otherItems, ...[value]];
  console.log("resumes" + resumes);

  updateAllResumes(resumes);
  try {
    await AsyncStorage.setItem(
      "local_resumes",
      JSON.stringify({ items: resumes })
    );
  } catch (e) {
    console.log(e);
  }
}

export async function updateResume(resume) {
  var userResume = await getResumes();
  var resumes = userResume?.items ?? [];

  console.log(resumes.map((x) => x.id));
  console.log("resume.id,", resume.id);

  var idx = resumes.findIndex((x) => x?.id == resume.id);
  if (idx >= 0) {
    console.log("found resume");
    resumes[idx] = resume;
    updateAllResumes(resumes);
  } else {
    console.log("found not resume");
  }
}

//delete function

export async function deleteResume(resume) {
  var userResumes = await getResumes();
  var resumes = userResumes?.items ?? [];
  var otherThanCurrent = resumes.filter((x) => x?.id !== resume.id);
  updateAllResumes(otherThanCurrent);
}

export async function updateAllResumes(resumes) {
  console.log("resumes" + resumes);
  try {
    await AsyncStorage.setItem(
      "local_resumes",
      JSON.stringify({ items: resumes })
    );
  } catch (e) {
    // console.log(e);
  }
}

export async function getResumes() {
  try {
    const value = await AsyncStorage.getItem("local_resumes");
    // console.log("here 1" + value);
    
    return JSON.parse(value);
  } catch (error) {
    // console.log("here 2: error -> " + error)
    return { items: [] };
  }
}
