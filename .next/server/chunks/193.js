"use strict";
exports.id = 193;
exports.ids = [193];
exports.modules = {

/***/ 8193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ useFirestore)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(4324);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);
// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__(6058);
// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(4610);
;// CONCATENATED MODULE: ./firebase/config.js



const firebaseConfig = {
    apiKey: "AIzaSyCVqtEbcvYU8v_yRxbSgUHCV1b1o9XLXyE",
    authDomain: "ninja-f2649.firebaseapp.com",
    projectId: "ninja-f2649",
    storageBucket: "ninja-f2649.appspot.com",
    messagingSenderId: "343013900334",
    appId: "1:343013900334:web:92f1c414e69db789859fbf"
};
// init firebase
if (!(app_default()).apps.length) {
    app_default().initializeApp(firebaseConfig);
}
// init service
const projectFirestore = app_default().firestore();
const projectAuth = app_default().auth();
const timestamp = (app_default()).firestore.Timestamp;


;// CONCATENATED MODULE: ./hooks/useFirestore.js


let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
};
const firestoreReducer = (state, action)=>{
    switch(action.type){
        case "IS_PENDING":
            return {
                isPending: true,
                document: null,
                success: false,
                error: null
            };
        case "ADDED_DOCUMENT":
            return {
                isPending: false,
                document: action.payload,
                success: true,
                error: null
            };
        case "DELETED_DOCUMENT":
            return {
                isPending: false,
                document: null,
                success: true,
                error: null
            };
        case "ERROR":
            return {
                isPending: false,
                document: null,
                success: false,
                error: action.payload
            };
        default:
            return state;
    }
};
const useFirestore = (collection)=>{
    const [response, dispatch] = (0,external_react_.useReducer)(firestoreReducer, initialState);
    const [isCancelled, setIsCancelled] = (0,external_react_.useState)(false);
    // collection ref
    const ref = projectFirestore.collection(collection);
    // only dispatch is not cancelled
    const dispatchIfNotCancelled = (action)=>{
        if (!isCancelled) {
            dispatch(action);
        }
    };
    // add a document
    const addDocument = async (doc)=>{
        dispatch({
            type: "IS_PENDING"
        });
        try {
            const createdAt = timestamp.fromDate(new Date());
            const addedDocument = await ref.add({
                ...doc,
                createdAt
            });
            dispatchIfNotCancelled({
                type: "ADDED_DOCUMENT",
                payload: addedDocument
            });
            console.log(response.success);
        } catch (err) {
            dispatchIfNotCancelled({
                type: "ERROR",
                payload: err.message
            });
            console.log(err.message);
        }
    };
    // delete a document
    const deleteDocument = async (id)=>{
        dispatch({
            type: "IS_PENDING"
        });
        try {
            await ref.doc(id).delete();
            dispatchIfNotCancelled({
                type: "DELETED_DOCUMENT"
            });
        } catch (err) {
            dispatchIfNotCancelled({
                type: "ERROR",
                payload: "could not delete"
            });
        }
    };
    (0,external_react_.useEffect)(()=>{
        return ()=>setIsCancelled(true);
    }, []);
    return {
        addDocument,
        deleteDocument,
        response
    };
};


/***/ })

};
;