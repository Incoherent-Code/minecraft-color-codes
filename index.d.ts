
export enum color_codes {
    /** Hex: "#000000" */
    black = "§0",
    /** Hex: "#0000AA" */
    dark_blue = "§1",
    /** Hex: "#00AA00" */
    dark_green = "§2",
    /** Hex: "#00AAAA" */
    dark_aqua = "§3",
    /** Hex: "#AA0000" */
    dark_red = "§4",
    /** Hex: "#AA00AA" */
    dark_purple = "§5",
    /** Hex: "#FFAA00" */
    gold = "§6",
    /** Hex: "#AAAAAA" */
    gray = "§7",
    /** Hex: "#555555" */
    dark_gray = "§8",
    /** Hex: "#5555FF" */
    blue = "§9",
    /** Hex: "#55FF55" */
    green = "§a",
    /** Hex: "#55FFFF" */
    aqua = "§b",
    /** Hex: "#FF5555" */
    red = "§c",
    /** Hex: "#FF55FF" */
    light_purple = "§d",
    /** Hex: "#FFFF55" */
    yellow = "§e",
    /** Hex: "#FFFFFF" */
    white = "§f",
    /** Hex: "#DDD605"
     * @remarks Bedrock Only
     */
    minecoin_gold = "§g",
    /** Hex: "#E3D4D1"
     * @remarks Bedrock Only
     */
    material_quartz = "§h",
    /** Hex: "#CECACA"
     * @remarks Bedrock Only
     */
    material_iron = "§i",
    /** Hex: "#443A3B"
     * @remarks Bedrock Only
     */
    material_netherite = "§j",
    /** Hex: "#971607"
     * @remarks Bedrock Only
     */
    material_redstone = "§m",
    /** Hex: "#B4684D"
     * @remarks Bedrock Only
     */
    material_copper = "§n",
    /** Hex: "#DEB12D"
     * @remarks Bedrock Only
     */
    material_gold = "§p",
    /** Hex: "#47A036"
     * @remarks Bedrock Only
     */
    material_emerald = "§q",
    /** Hex: "#2CBAA8"
     * @remarks Bedrock Only
     */
    material_diamond = "§s",
    /** Hex: "#21497B"
     * @remarks Bedrock Only
     */
    material_lapis = "§t",
    /** Hex: "#9A5CC6"
     * @remarks Bedrock Only
     */
    material_amethyst = "§u"
  }
  
  export enum format_codes {
    obfuscated = "§k",
    bold = "§l",
    /**@remarks Java Only */
    striketrough = "§m",
    /** @remarks Java Only */
    underline = "§n",
    italic = "§o",
    reset = "§r"
  }

  //I thought I could save some boilerplate but nope
  //export type bedrock_color_codes = color_codes;

  export enum bedrock_color_codes {
    /** Hex: "#000000" */
    black = "§0",
    /** Hex: "#0000AA" */
    dark_blue = "§1",
    /** Hex: "#00AA00" */
    dark_green = "§2",
    /** Hex: "#00AAAA" */
    dark_aqua = "§3",
    /** Hex: "#AA0000" */
    dark_red = "§4",
    /** Hex: "#AA00AA" */
    dark_purple = "§5",
    /** Hex: "#FFAA00" */
    gold = "§6",
    /** Hex: "#AAAAAA" */
    gray = "§7",
    /** Hex: "#555555" */
    dark_gray = "§8",
    /** Hex: "#5555FF" */
    blue = "§9",
    /** Hex: "#55FF55" */
    green = "§a",
    /** Hex: "#55FFFF" */
    aqua = "§b",
    /** Hex: "#FF5555" */
    red = "§c",
    /** Hex: "#FF55FF" */
    light_purple = "§d",
    /** Hex: "#FFFF55" */
    yellow = "§e",
    /** Hex: "#FFFFFF" */
    white = "§f",
    /** Hex: "#DDD605"
     * @remarks Bedrock Only
     */
    minecoin_gold = "§g",
    /** Hex: "#E3D4D1"
     * @remarks Bedrock Only
     */
    material_quartz = "§h",
    /** Hex: "#CECACA"
     * @remarks Bedrock Only
     */
    material_iron = "§i",
    /** Hex: "#443A3B"
     * @remarks Bedrock Only
     */
    material_netherite = "§j",
    /** Hex: "#971607"
     * @remarks Bedrock Only
     */
    material_redstone = "§m",
    /** Hex: "#B4684D"
     * @remarks Bedrock Only
     */
    material_copper = "§n",
    /** Hex: "#DEB12D"
     * @remarks Bedrock Only
     */
    material_gold = "§p",
    /** Hex: "#47A036"
     * @remarks Bedrock Only
     */
    material_emerald = "§q",
    /** Hex: "#2CBAA8"
     * @remarks Bedrock Only
     */
    material_diamond = "§s",
    /** Hex: "#21497B"
     * @remarks Bedrock Only
     */
    material_lapis = "§t",
    /** Hex: "#9A5CC6"
     * @remarks Bedrock Only
     */
    material_amethyst = "§u"
  }

  export enum bedrock_format_codes {
    obfuscated = "§k",
    bold = "§l",
    italic = "§o",
    reset = "§r"
  }

  export enum java_color_codes {
    /** Hex: "#000000" */
    black = "§0",
    /** Hex: "#0000AA" */
    dark_blue = "§1",
    /** Hex: "#00AA00" */
    dark_green = "§2",
    /** Hex: "#00AAAA" */
    dark_aqua = "§3",
    /** Hex: "#AA0000" */
    dark_red = "§4",
    /** Hex: "#AA00AA" */
    dark_purple = "§5",
    /** Hex: "#FFAA00" */
    gold = "§6",
    /** Hex: "#AAAAAA" */
    gray = "§7",
    /** Hex: "#555555" */
    dark_gray = "§8",
    /** Hex: "#5555FF" */
    blue = "§9",
    /** Hex: "#55FF55" */
    green = "§a",
    /** Hex: "#55FFFF" */
    aqua = "§b",
    /** Hex: "#FF5555" */
    red = "§c",
    /** Hex: "#FF55FF" */
    light_purple = "§d",
    /** Hex: "#FFFF55" */
    yellow = "§e",
    /** Hex: "#FFFFFF" */
    white = "§f"
  }

  //export type java_format_codes = format_codes;

  export enum java_format_codes {
    obfuscated = "§k",
    bold = "§l",
    /**@remarks Java Only */
    striketrough = "§m",
    /** @remarks Java Only */
    underline = "§n",
    italic = "§o",
    reset = "§r"
  }