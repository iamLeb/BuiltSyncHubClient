const privateFiles = ["/secure"];
const url = new URL(window.location.href); // get the full path
const firstPath = url.pathname.split('/')[1]; // get the first path after /
let holdPath = '/auth/login'; // default path

privateFiles.forEach(file => {
    if (firstPath === file.split('/')[1]) // check if first path matches the privateFiles array
        holdPath = file.split('/')[1]; // re-assign the path.
});

export {holdPath, firstPath}
