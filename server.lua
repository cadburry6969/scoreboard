local string_find = string.find
local string_lower = string.lower
local identifer = Config.UseIdentifier

function GetIdentifier(source, idtype)
    local identifiers = GetPlayerIdentifiers(source)
    for _, identifier in pairs(identifiers) do
        if string_find(identifier, idtype) then
            return identifier
        end
    end
    return nil
end

RegisterNetEvent("scoreboard:initiatedata", function()
    local players = {}
    local source = source
    local totalonline = GetNumPlayerIndices()
    for _, v in pairs(GetPlayers()) do
        players[#players+1] = {
            source = v,
            identifier = string_lower(GetIdentifier(v, identifer))
        }
    end
    Player(source).state.scoreplayers = players
    Player(source).state.scoretotalonline = totalonline
end)