import React from "react";
import Icons from "./Icons";
import Time from "./Time";
import Unit from "./Unit";
import moment from "moment";

export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription row rounded shadow">
     <div className="col">
     <p className="text-uppercase fs-1 fw-bolder">{props.data.city}</p>
          <Time />
        <p className="p-1 text-capitalize fw-bold">{props.data.description}</p>
        <Icons code={props.data.icon} /><Unit fahrenheit={props.data.temperature} />
        </div>
        
        <div className="row-auto m-2 p-1 justify-content-md-center">
        <div className="row m-1">
        <div className="col-1"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzY4IDM2OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzY4IDM2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yOTYsNDhjLTM5LjcwNCwwLTcyLDMyLjMwNC03Miw3MmMwLDQuNDE2LDMuNTc2LDgsOCw4czgtMy41ODQsOC04YzAtMzAuODgsMjUuMTI4LTU2LDU2LTU2czU2LDI1LjEyLDU2LDU2DQoJCQlzLTI1LjEyOCw1Ni01Niw1Nkg4Yy00LjQxNiwwLTgsMy41ODQtOCw4czMuNTg0LDgsOCw4aDI4OGMzOS43MDQsMCw3Mi0zMi4zMDQsNzItNzJTMzM1LjcwNCw0OCwyOTYsNDh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNDQsMzJjLTMwLjg4LDAtNTYsMjUuMTItNTYsNTZjMCw0LjQxNiwzLjU4NCw4LDgsOHM4LTMuNTg0LDgtOGMwLTIyLjA1NiwxNy45NDQtNDAsNDAtNDBjMjIuMDU2LDAsNDAsMTcuOTQ0LDQwLDQwDQoJCQljMCwyMi4wNTYtMTcuOTQ0LDQwLTQwLDQwSDhjLTQuNDE2LDAtOCwzLjU4NC04LDhzMy41ODQsOCw4LDhoMTM2YzMwLjg4LDAsNTYtMjUuMTIsNTYtNTZTMTc0Ljg4LDMyLDE0NCwzMnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI4MCwyMjRIOGMtNC40MTYsMC04LDMuNTg0LTgsOGMwLDQuNDE2LDMuNTg0LDgsOCw4aDI3MmMyMi4wNTYsMCw0MCwxNy45NDQsNDAsNDBjMCwyMi4wNTYtMTcuOTQ0LDQwLTQwLDQwDQoJCQljLTIyLjA1NiwwLTQwLTE3Ljk0NC00MC00MGMwLTQuNDE2LTMuNTc2LTgtOC04cy04LDMuNTg0LTgsOGMwLDMwLjg4LDI1LjEyOCw1Niw1Niw1NnM1Ni0yNS4xMiw1Ni01NlMzMTAuODcyLDIyNCwyODAsMjI0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" height="20px" alt="" /></div>
        <div className="col-5 p-1"><p className="text-start">Wind: {Math.round(props.data.wind)} mph</p></div>
        <div className="col-1"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDY5LjMzMyA0NjkuMzMzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjkuMzMzIDQ2OS4zMzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0yMzQuNjY3LDE3MC42NjdjLTM1LjMwNywwLTY0LDI4LjY5My02NCw2NHMyOC42OTMsNjQsNjQsNjRzNjQtMjguNjkzLDY0LTY0UzI2OS45NzMsMTcwLjY2NywyMzQuNjY3LDE3MC42Njd6Ii8+DQoJCQk8cGF0aCBkPSJNMjM0LjY2Nyw3NC42NjdDMTI4LDc0LjY2NywzNi45MDcsMTQxLjAxMywwLDIzNC42NjdjMzYuOTA3LDkzLjY1MywxMjgsMTYwLDIzNC42NjcsMTYwDQoJCQkJYzEwNi43NzMsMCwxOTcuNzYtNjYuMzQ3LDIzNC42NjctMTYwQzQzMi40MjcsMTQxLjAxMywzNDEuNDQsNzQuNjY3LDIzNC42NjcsNzQuNjY3eiBNMjM0LjY2NywzNDEuMzMzDQoJCQkJYy01OC44OCwwLTEwNi42NjctNDcuNzg3LTEwNi42NjctMTA2LjY2N1MxNzUuNzg3LDEyOCwyMzQuNjY3LDEyOHMxMDYuNjY3LDQ3Ljc4NywxMDYuNjY3LDEwNi42NjcNCgkJCQlTMjkzLjU0NywzNDEuMzMzLDIzNC42NjcsMzQxLjMzM3oiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" height="20px" alt="" /></div>
        <div className="col-5 p-1"><p className="text-start">Visibility: {Math.round((props.data.visibility) / 914)} mi</p></div>
        </div>
     <div className="row m-1">
      <div className="col-1">
     <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTAuMTczIDUxMC4xNzMiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEwLjE3MyA1MTAuMTczIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0xOTkuNTkzIDM1OS45MTl2LTMwNy4xNTRjMC0yOS4wOTUtMjMuNjctNTIuNzY1LTUyLjc2NS01Mi43NjVzLTUyLjc2NCAyMy42Ny01Mi43NjQgNTIuNzY1djMwNS45MjhjLTIwLjY0NiAxNi4wMTktMzIuNzE2IDQwLjQ3NS0zMi42NzEgNjYuOTU5LjAzOSAyMi41ODMgOS4xMzYgNDMuOTE3IDI1LjYxNSA2MC4wNzMgMTYuMTE4IDE1LjgwMSAzNy4wNDUgMjQuNDQ4IDU5LjA4MiAyNC40NDcuNTA4IDAgMS4wMTktLjAwNCAxLjUyNy0uMDE0IDIyLjI4OS0uNDA0IDQzLjE3OS05LjM4OSA1OC44Mi0yNS4yOTkgMTUuNjYyLTE1LjkzMSAyNC4yODgtMzcuMDEgMjQuMjg4LTU5LjM1My4wMDEtMjUuNjE2LTExLjQ5OS00OS41NzMtMzEuMTMyLTY1LjU4N3ptLTMwLTU3LjgwMWgtNDUuNTI5di00NS41MjloNDUuNTI5em0wLTc1LjUyOWgtNDUuNTI5di00NS41M2g0NS41Mjl6bTAtNzUuNTNoLTQ1LjUyOXYtNDUuNTI5aDQ1LjUyOXptLTIyLjc2NS0xMjEuMDU5YzEyLjU1MyAwIDIyLjc2NSAxMC4yMTIgMjIuNzY1IDIyLjc2NXYyMi43NjVoLTQ1LjUyOXYtMjIuNzY1YzAtMTIuNTUzIDEwLjIxMS0yMi43NjUgMjIuNzY0LTIyLjc2NXptMzguMjE3IDQzMy44MjhjLTEwLjEwMSAxMC4yNzQtMjMuNTg1IDE2LjA3NS0zNy45NzEgMTYuMzM2LTE0LjUwMi4yNTItMjguMzYzLTUuMzcxLTM5LjA2NC0xNS44NjEtMTAuNjktMTAuNDgxLTE2LjU5My0yNC4yMjYtMTYuNjE3LTM4LjcwMi0uMDMyLTE4Ljk1NSA5LjU1Ny0zNi4zMDYgMjUuNjQ5LTQ2LjQxNGw3LjAyMS00LjQxMXYtNDIuNjU5aDQ1LjUyOXY0My4zOWw2LjY5MSA0LjQ1MmMxNS4zMDUgMTAuMTgyIDI0LjQ0MSAyNy4yMDkgMjQuNDQxIDQ1LjU0Ny4wMDIgMTQuNDI3LTUuNTY4IDI4LjAzNi0xNS42NzkgMzguMzIyeiIvPjxwYXRoIGQ9Im0zMzUuOTA0IDIzMy4yMjMgMjEuMjEzLTIxLjIxMy00NS45ODgtNDUuOTg5aC0yMS4yMTNsLTQ2LjMwNSA0Ni4zMDQgMjEuMjEzIDIxLjIxNCAyMC42OTktMjAuNjk4djcyLjUzMWgzMHYtNzIuNTMxeiIvPjxwYXRoIGQ9Im00MjcuNTY3IDI3OC40NjEtMjAuNjk4IDIwLjY5OHYtNzIuNTMxaC0zMHY3Mi41MzFsLTIwLjM4Mi0yMC4zODItMjEuMjEzIDIxLjIxMyA0NS45ODkgNDUuOTg5aDIxLjIxM2w0Ni4zMDQtNDYuMzA0eiIvPjwvZz48L3N2Zz4=" width="20px" height="20px" alt="" />
      </div>
     <div className="col-5 p-1"><p className="text-start">H: {Math.round(props.data.high)}° / L: {Math.round(props.data.low)}°</p></div>
      <div className="col-1">
       <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM3NS40NjggMzc1LjQ2OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzc1LjQ2OCAzNzUuNDY4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM3NS40NjcsMTQ5LjM2M2MwLTQ2LjU5Mi02Ny41ODQtMTI0LjMzMS04MS4xNTItMTM5LjQzNWMtNi42NTQtNy4wNjktMTcuNzc5LTcuNDA2LTI0Ljg0OS0wLjc1MQ0KCQkJYy0wLjI1OCwwLjI0My0wLjUwOSwwLjQ5My0wLjc1MSwwLjc1MWMtMjMuNjg5LDI2LjY2OC00NC44Myw1NS40OTQtNjMuMTQ3LDg2LjEwMWMtMTEuMDkzLTEzLjU2OC0xOS42MjctMjMuMjExLTIyLjQ0My0yNi4zNjgNCgkJCWMtNi42NTQtNy4wNjktMTcuNzc5LTcuNDA2LTI0Ljg0OS0wLjc1MWMtMC4yNTgsMC4yNDMtMC41MDksMC40OTMtMC43NTEsMC43NTFjLTIzLjI4LDI2LjM4My00NC44ODMsNTQuMTk5LTY0LjY4Myw4My4yODUNCgkJCWMtNy44NTEtMTMuMjI3LTE1LjQ0NS0yNC40OTEtMTkuNTQxLTMwLjM3OWMtNS4zNjEtNy43NTMtMTUuOTkyLTkuNjkxLTIzLjc0NC00LjMzYy0xLjY5MywxLjE3MS0zLjE2LDIuNjM4LTQuMzMsNC4zMw0KCQkJYy0xMC4yNCwxNS41MzEtNDUuMjI3LDY4LjI2Ny00NS4yMjcsOTUuMDYxYy0wLjE0MiwzMC44OCwyMy4yNzcsNTYuNzc4LDU0LjAxNiw1OS43MzMNCgkJCWMxNC4yNDEsNjQuNDI0LDc4LjAxMSwxMDUuMTA2LDE0Mi40MzYsOTAuODY2YzU0LjY1NS0xMi4wODEsOTMuNTk1LTYwLjQ5MSw5My42ODEtMTE2LjQ2NmMtMC4wNTItMi44NTYtMC4yOC01LjcwNi0wLjY4My04LjUzMw0KCQkJQzMzOC4yMDQsMjM5LjEzOCwzNzUuNjM5LDE5OC4yODcsMzc1LjQ2NywxNDkuMzYzeiBNNTkuNzM0LDI0My4yM2MtMTQuMTM4LDAtMjUuNi0xMS40NjItMjUuNi0yNS42DQoJCQljMC04LjUzMywxMS42OTEtMzEuMzE3LDI1LjYtNTQuMDE2YzEzLjkwOSwyMi42OTksMjUuNiw0NS40ODMsMjUuNiw1NC4wMTZDODUuMzM0LDIzMS43NjgsNzMuODcyLDI0My4yMyw1OS43MzQsMjQzLjIzeg0KCQkJIE0xNzAuNjY3LDMzNy4wOTZjLTM5LjgzOC0wLjIxOS03NC4yOS0yNy44MTYtODMuMi02Ni42NDVjMTkuNjQ3LTEwLjI5OSwzMS45NjktMzAuNjM4LDMyLTUyLjgyMQ0KCQkJYy0wLjY2OC05LjYwNi0zLjA5OC0xOS4wMDctNy4xNjgtMjcuNzMzYzAuNjg0LTMuNzU4LDIuMi03LjMxNSw0LjQzNy0xMC40MTFjMTYuNTM5LTI1LjEzMywzNC41NDctNDkuMjY3LDUzLjkzMS03Mi4yNzcNCgkJCWMzNy4zNzYsNDQuMjAzLDg1LjMzMywxMTIuMDQzLDg1LjMzMywxNDQuNTU1QzI1Ni4wMDEsMjk4Ljg5MSwyMTcuNzk2LDMzNy4wOTYsMTcwLjY2NywzMzcuMDk2eiBNMjgxLjYwMSwyMDkuMDk2aC0yLjA0OA0KCQkJYy0xMy42ODctMjkuNTgyLTMwLjYzLTU3LjU0NS01MC41MTctODMuMzcxYzAuMzE4LTEuMDUyLDAuNzc4LTIuMDU3LDEuMzY1LTIuOTg3YzE0LjM4NC0yNi43NTgsMzEuNTQ2LTUxLjkyOCw1MS4yLTc1LjA5Mw0KCQkJYzI3Ljk4OSwzNC4xMzMsNTkuNzMzLDgwLjM4NCw1OS43MzMsMTAxLjcxN0MzNDEuMzM0LDE4Mi4zNTMsMzE0LjU5LDIwOS4wOTYsMjgxLjYwMSwyMDkuMDk2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzI1LjcyNCwxMjkuNzU3Yy0wLjEyNC0wLjMyOC0wLjI2OS0wLjY0OS0wLjQzMi0wLjk1OWMtMS4zNjUtMi45ODctMi45MDEtNi4wNTktNC41MjMtOS4xMzENCgkJCWMtMi41MjMtMy45ODEtNy43OTUtNS4xNjMtMTEuNzc2LTIuNjRjLTMuNjMsMi4zLTQuOTgzLDYuOTQxLTMuMTU4LDEwLjgzMmMxLjQ1MSwyLjY0NSwyLjgxNiw1LjM3NiwzLjkyNSw3LjkzNg0KCQkJYzEuNjY3LDQuNDA4LDYuNTkyLDYuNjMsMTEsNC45NjJTMzI3LjM5MSwxMzQuMTY1LDMyNS43MjQsMTI5Ljc1N3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTMwOS44NDYsMTAxLjkxN2MtNy4wODMtMTAuNDExLTE0LjU5Mi0xOS45NjgtMTkuNjI3LTI2LjE5N2MtMi43ODctMy44LTguMTI3LTQuNjIyLTExLjkyOC0xLjgzNQ0KCQkJYy0zLjgsMi43ODctNC42MjIsOC4xMjctMS44MzUsMTEuOTI4YzAuMTY3LDAuMjI4LDAuMzQ2LDAuNDQ4LDAuNTM2LDAuNjU5YzQuODY0LDUuOTczLDEyLjAzMiwxNS4xMDQsMTguNjg4LDI1LjAwMw0KCQkJYzIuNjM5LDMuOTEyLDcuOTUsNC45NDMsMTEuODYxLDIuMzA0QzMxMS40NTQsMTExLjE0LDMxMi40ODUsMTA1LjgyOSwzMDkuODQ2LDEwMS45MTd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xOTUuOTY5LDMwNi41ODljLTEuMzQzLTQuNTI0LTYuMS03LjEwMy0xMC42MjQtNS43NmMtNC43NjMsMS40Mi05LjcwNywyLjEzOC0xNC42NzcsMi4xMzMNCgkJCWMtNC43MTMsMC04LjUzMywzLjgyLTguNTMzLDguNTMzczMuODIsOC41MzMsOC41MzMsOC41MzNjNi42MTYsMC4wMTMsMTMuMTk4LTAuOTM1LDE5LjU0MS0yLjgxNg0KCQkJQzE5NC43MzMsMzE1Ljg3LDE5Ny4zMTIsMzExLjExNCwxOTUuOTY5LDMwNi41ODl6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMzYuNDU5LDIzMi4zMDdjLTEuMzQzLTQuNTI0LTYuMS03LjEwMy0xMC42MjQtNS43NmMtNC41MjQsMS4zNDMtNy4xMDMsNi4xLTUuNzYsMTAuNjI0DQoJCQljNS4zMTcsMTcuODI2LDAuNTQ3LDM3LjEzMy0xMi40NTksNTAuNDMyYy0zLjMwMywzLjM2MS0zLjI1Niw4Ljc2NCwwLjEwNSwxMi4wNjhjMS41MDUsMS40NzksMy41MDQsMi4zNDgsNS42MTIsMi40MzkNCgkJCWMyLjI4LTAuMDA5LDQuNDYyLTAuOTMxLDYuMDU5LTIuNTZDMjM2Ljg5NSwyODEuOTEyLDI0My40MzIsMjU2LjE1NywyMzYuNDU5LDIzMi4zMDd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" height="20px" alt="" />
      </div>
     <div className="col-5 p-1"><p className="text-start">Humidity: {Math.round(props.data.humidity)}%</p></div>
     </div>
     <div className="row m-1">
      <div className="col-1">
     <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTI0MSAxMTQuOTU0aDMwdjExMWgtMzB6Ii8+PHBhdGggZD0ibTQxMi4yNzkgMzk3Ljk1MmMtNy41NzctNzkuNTU5LTc0Ljc2OS0xNDEuOTk4LTE1Ni4yNzktMTQxLjk5OHMtMTQ4LjcwMiA2Mi40NC0xNTYuMjc5IDE0MS45OTloLTk5LjcyMXYzMGg1MTJ2LTMwaC05OS43MjF6bS0xNTYuMjc5LTExMS45OThjNjQuOTU0IDAgMTE4LjY3NSA0OS4wMTMgMTI2LjExOSAxMTEuOTk5aC0yNTIuMjM4YzcuNDQ0LTYyLjk4NiA2MS4xNjUtMTExLjk5OSAxMjYuMTE5LTExMS45OTl6Ii8+PHBhdGggZD0ibTYzLjY2NyA0NTcuOTUyaDM4NC42Njd2MzBoLTM4NC42Njd6Ii8+PHBhdGggZD0ibTMzLjc5NCAzMDAuMjloMzB2NjkuMDAxaC0zMHoiIHRyYW5zZm9ybT0ibWF0cml4KC4zNTMgLS45MzYgLjkzNiAuMzUzIC0yODEuNjc4IDI2Mi4zMDYpIi8+PHBhdGggZD0ibTE1NS41OTEgMTc0LjExMmgzMHY2OS4wMDFoLTMweiIgdHJhbnNmb3JtPSJtYXRyaXgoLjkyMyAtLjM4NiAuMzg2IC45MjMgLTY3LjI0MyA4MS45MDIpIi8+PHBhdGggZD0ibTMwNi45MDggMTkzLjYxMmg2OS4wMDF2MzBoLTY5LjAwMXoiIHRyYW5zZm9ybT0ibWF0cml4KC4zODYgLS45MjMgLjkyMyAuMzg2IDE3LjI5NiA0NDMuMTk2KSIvPjxwYXRoIGQ9Im00MjguNzA1IDMxOS43OTFoNjkuMDAxdjMwaC02OS4wMDF6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTM2IC0uMzUzIC4zNTMgLjkzNiAtODguMzQyIDE4NC45OTMpIi8+PHBhdGggZD0ibTY5LjUyOCAxODUuOThoMzB2MTExaC0zMHoiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IC0xNDUuOTk1IDEzMC40OTgpIi8+PHBhdGggZD0ibTM3MS45NzIgMjI2LjQ4aDExMXYzMGgtMTExeiIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTQ1LjU0OCAzNzIuOTk3KSIvPjxwYXRoIGQ9Im00MzguODcgNzAuODY3djcyLjUzMWgzMHYtNzIuNTMxbDIwLjM4MiAyMC4zODIgMjEuMjEzLTIxLjIxMy00NS45ODgtNDUuOTg4aC0yMS4yMTNsLTQ2LjMwNSA0Ni4zMDMgMjEuMjEzIDIxLjIxM3oiLz48L2c+PC9zdmc+" height="20px" alt="" />
      </div>
       <div className="col-5 p-1"><p className="text-start">Sunrise: {moment(props.data.sunrise *1000).format('LT')}</p></div>
       <div className="col-1">
     <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTI0MSAxMDkuNjUxaDMwdjExMWgtMzB6Ii8+PHBhdGggZD0ibTQxMi4yOCAzOTIuNjQ5Yy03LjU3OC03OS41NTktNzQuNzctMTQxLjk5OC0xNTYuMjgtMTQxLjk5OHMtMTQ4LjcwMiA2Mi40MzktMTU2LjI3OSAxNDEuOTk4aC05OS43MjF2MzBoNTEydi0zMHptLTE1Ni4yOC0xMTEuOTk4YzY0Ljk1NSAwIDExOC42NzUgNDkuMDEzIDEyNi4xMTkgMTExLjk5OWgtMjUyLjIzOGM3LjQ0NC02Mi45ODYgNjEuMTY1LTExMS45OTkgMTI2LjExOS0xMTEuOTk5eiIvPjxwYXRoIGQ9Im02My42NjcgNDUyLjY0OWgzODQuNjY2djMwaC0zODQuNjY2eiIvPjxwYXRoIGQ9Im0zMy43OTQgMjk0Ljk4N2gzMHY2OS4wMDFoLTMweiIgdHJhbnNmb3JtPSJtYXRyaXgoLjM1MyAtLjkzNiAuOTM2IC4zNTMgLTI3Ni43MTYgMjU4Ljg3NCkiLz48cGF0aCBkPSJtMTU1LjU5MSAxNjguODA4aDMwdjY5LjAwMWgtMzB6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTIzIC0uMzg2IC4zODYgLjkyMyAtNjUuMTk4IDgxLjQ5MikiLz48cGF0aCBkPSJtMzA2LjkwOCAxODguMzA5aDY5LjAwMXYyOS45OTloLTY5LjAwMXoiIHRyYW5zZm9ybT0ibWF0cml4KC4zODYgLS45MjMgLjkyMyAuMzg2IDIyLjE3OSA0MzkuOTI0KSIvPjxwYXRoIGQ9Im00MjguNzA1IDMxNC40ODhoNjkuMDAxdjMwaC02OS4wMDF6IiB0cmFuc2Zvcm09Im1hdHJpeCguOTM2IC0uMzUzIC4zNTMgLjkzNiAtODYuNDcyIDE4NC42NTQpIi8+PHBhdGggZD0ibTY5LjUyOCAxODAuNjc3aDMwdjExMWgtMzB6IiB0cmFuc2Zvcm09Im1hdHJpeCguNzA3IC0uNzA3IC43MDcgLjcwNyAtMTQyLjI0NSAxMjguOTQ1KSIvPjxwYXRoIGQ9Im0zNzEuOTczIDIyMS4xNzdoMTExdjMwaC0xMTF6IiB0cmFuc2Zvcm09Im1hdHJpeCguNzA3IC0uNzA3IC43MDcgLjcwNyAtNDEuNzk4IDM3MS40NDMpIi8+PHBhdGggZD0ibTQ2NC40NzcgMTQ4LjcwMSA0NS45ODktNDUuOTg4LTIxLjIxMy0yMS4yMTMtMjAuMzgzIDIwLjM4MnYtNzIuNTMxaC0zMHY3Mi41MzFsLTIwLjY5OC0yMC42OTgtMjEuMjEzIDIxLjIxMyA0Ni4zMDUgNDYuMzA0eiIvPjwvZz48L3N2Zz4=" height="20px" alt="" />
       </div>
     <div className="col-5 p-1"><p className="text-start ">Sunset: {moment(props.data.sunset *1000).format('LT')}</p></div>
    </div>
    </div>
</div>
  );
}