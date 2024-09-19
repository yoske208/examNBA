var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Position = document.querySelector('#position');
var Name = document.querySelector('#name');
var Three = document.querySelector('#three');
var Two = document.querySelector('#two');
var Points = document.querySelector('#points');
var Tbody = document.querySelector('#tbody');
var btnsearch = document.querySelector('#btnsearch');
var pointRaange = document.querySelector('#pointRaange');
var steage2Raange = document.querySelector('#steage2Raange');
var steage3Raange = document.querySelector('#steage3Raange');
var filterinput = document.querySelector('#filterinput');
var BASE_url = 'https://nbaserver-q21u.onrender.com/api/filter/';
var newplay = {
    position: 'C',
    threePercent: 4,
    twoPercent: 4,
    points: 300
};
btnsearch.addEventListener('click', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            fetchPlayers(newplay);
            return [2 /*return*/];
        });
    });
});
pointRaange.addEventListener('input', function () { return pointRaange.textContent = pointRaange.value; });
steage2Raange.addEventListener('input', function () { return steage2Raange.textContent = steage2Raange.value; });
steage3Raange.addEventListener('input', function () { return steage3Raange.textContent = steage3Raange.value; });
function displayTable(players) {
    Tbody.textContent = '';
    players.forEach(function (player) {
        var row = document.createElement('tr');
        var playerTD = document.createElement('td');
        var positionTD = document.createElement('td');
        var fgTD = document.createElement('td');
        var threePTD = document.createElement('td');
        var actionTD = document.createElement('td');
        var selectPlayerBTN = document.createElement('button');
        selectPlayerBTN.textContent = 'add player';
        positionTD.textContent = player.position;
        fgTD.textContent = player.twoPercent.toString();
        threePTD.textContent = player.threePercent.toString();
        row.appendChild(playerTD);
        row.appendChild(positionTD);
        row.appendChild(fgTD);
        row.appendChild(threePTD);
        row.appendChild(actionTD);
        actionTD.appendChild(selectPlayerBTN);
        Tbody.appendChild(row);
    });
}
function createPlayer(player) {
    return __awaiter(this, void 0, void 0, function () {
        var resp, newPlayer, playerList, li;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(BASE_url, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(player)
                    })];
                case 1:
                    resp = _a.sent();
                    return [4 /*yield*/, resp.json()];
                case 2:
                    newPlayer = _a.sent();
                    console.log(newPlayer);
                    playerList = document.createElement('ul');
                    li = document.createElement('li');
                    li.textContent = "".concat(player.points, " ").concat(player.position, " ").concat(player.threePercent, " ").concat(player.twoPercent);
                    playerList.append(li);
                    return [2 /*return*/];
            }
        });
    });
}
function fetchPlayers(newplay) {
    return __awaiter(this, void 0, void 0, function () {
        var filterData, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filterData = {
                        position: filterinput.value,
                        twoPercent: parseInt(steage2Raange.value),
                        threePercent: parseInt(steage3Raange.value),
                        points: parseInt(pointRaange.value)
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(BASE_url, {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(filterData)
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    displayTable(data);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
fetchPlayers(newplay);
