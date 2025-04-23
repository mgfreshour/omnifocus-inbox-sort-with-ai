// Generated OmniFocus API Interface
// This file contains no-op implementations of the OmniFocus API


/**
 * An alert interface for displaying information to the user, blocking further interaction until the alert is dismissed.
 */
class Alert {

    /**
     * Create a new alert panel with the given title and text contents.
     * @param {String} title
     * @param {String} message
     */
    constructor(title, message) { }

    /**
     * Displays the alert. If no options have yet been added, a default “OK” option is added. Once the user selects an option, the alert is dismissed. If a callback function was supplied, it is invoked with the zero-based index of the selected option as its argument. A Promise is returned as well, which may also be used to collect the result of the Alert.
     * @param {Function(option} callback
     */
    show(callback) { }

    /**
     * Adds an option button to the alert.
     * @param {String} string
     */
    addOption(string) { }
}


/**
 * 
 */
const Application = {

    /**
     * Attempts to open the specified document and return a reference to it asynchronously. If the document is already open, the reference is passed along. Note that due to platform sandboxing restrictions, opening the document may fail if the application doesn’t have currently permission to access the given URL. The document, if any, that is associated with the calling script can be passed along to help grant permission to open the new document.
     *  The passed in function will be passed two argument. The first will be either either the Document or an Error. On success, the second argument is a Boolean specifying whether the document was already open.
     * @param {Document=} from
     * @param {URL} url
     * @param {Function(documentOrError} completed
     */
    openDocument: function(from, url, completed) { }
    /**
     * The internal build version number for the app. See also userVersion.
     */
,
    buildVersion: function() { return null; }
    /**
     * Whether the Command key is currently down.
     */
,
    commandKeyDown: function() { return null; }
    /**
     * Whether the Control key is currently down.
     */
,
    controlKeyDown: function() { return null; }
    /**
     * Application name.
     */
,
    name: function() { return null; }
    /**
     * Whether the Option key is currently down.
     */
,
    optionKeyDown: function() { return null; }
    /**
     * Returns a string describing the current platform, currently "iOS" or "macOS".
     */
,
    platformName: function() { return null; }
    /**
     * Whether the Shift key is currently down.
     */
,
    shiftKeyDown: function() { return null; }
    /**
     * The user-visible version number for the app. See also buildVersion.
     */
,
    userVersion: function() { return null; }
    /**
     * Deprecated: Recommend using either userVersion or buildVersion.
     */
,
    version: function() { return null; }
};

globalThis.Application = Application;


/**
 * 
 */
class ApplyResult {

    /**
     * The descendants of the current item are skipped.
     */
    static get SkipChildren() { return null; }

    /**
     * The unvisited peers of the current item are skipped.
     */
    static get SkipPeers() { return null; }

    /**
     * The call to apply terminates with no further items being visited.
     */
    static get Stop() { return null; }

    /**
     * 
     */
    static get all() { return null; }
}


/**
 * An Array containing Folder objects.
 */
class FolderArray extends Array {

    /**
     * Returns the first Folder contained directly in this array with the given name.
     * @param {String} name
     */
    byName(name) { }
}


/**
 * An Array containing Project objects.
 */
class ProjectArray extends Array {

    /**
     * Returns the first Project contained directly in this array with the given name.
     * @param {String} name
     */
    byName(name) { }
}


/**
 * An Array containing Project and Folder objects.
 */
class SectionArray extends Array {

    /**
     * Returns the first Project or Folder contained directly in this array with the given name.
     * @param {String} name
     */
    byName(name) { }
}


/**
 * An Array of folders and projects at the top level of the database. (This can be referenced via the top-level global variable library.)
 */
class Library extends SectionArray {

    /**
     * Calls the given function for each Folder and Project in the Library and recursively into any child folders. Note that the tasks in projects are not included. The supplied function can optionally return a ApplyResult to skip enumeration of some elements.
     * @param {Function(section} fn
     */
    apply(fn) { }

    /**
     * Returns a location referring to the beginning of the top-level projects and folders in the database. (Reference this using library.beginning.)
     */
get beginning() { return null; }

    /**
     * Returns a location referring to the ending of the top-level projects and folders in the database. (Reference this using library.ending.)
     */
get ending() { return null; }
}


/**
 * An Array containing Tag objects.
 */
class TagArray extends Array {

    /**
     * Returns the first Tag contained directly in this array with the given name.
     * @param {String} name
     */
    byName(name) { }
}


/**
 * An Array of tags at the top level of the database.
 */
class Tags extends TagArray {

    /**
     * Calls the given function for each Tag in the Library and recursively into any child tags. The supplied function can optionally return a ApplyResult to skip enumeration of some elements.
     * @param {Function(tag} fn
     */
    apply(fn) { }

    /**
     * Returns a location referring to the beginning of the top-level tags in the database.
     */
get beginning() { return null; }

    /**
     * Returns a location referring to the ending of the top-level tags in the database.
     */
get ending() { return null; }
}


/**
 * An Array containing Task objects.
 */
class TaskArray extends Array {

    /**
     * Returns the first Task contained directly in this array with the given name.
     * @param {String} name
     */
    byName(name) { }
}


/**
 * An Array of tasks that are in the inbox.
 */
class Inbox extends TaskArray {

    /**
     * Calls the given function for each Task in the Inbox and recursively into any child tasks. The supplied function can optionally return a ApplyResult to skip enumeration of some elements.
     * @param {Function(task} fn
     */
    apply(fn) { }

    /**
     * A location that can be used when adding, duplicating, or moving tasks.
     */
get beginning() { return null; }

    /**
     * A location that can be used when adding, duplicating, or moving tasks.
     */
get ending() { return null; }
}


/**
 * 
 */
class Audio {

    /**
     * Play the specified Audio.Alert. On macOS, if no alert is specified, the user’s default alert sound will be played. On iOS, there is no default alert sound and nothing will be done without specifying an alert.
     * @param {Audio.Alert=} alert
     * @param {Function(} completed
     */
    static     playAlert(alert, completed) { }
}


/**
 * 
 */

/**
 * 
 */
const Calendar = {

    /**
     * 
     */
    buddhist: function() { return null; }
    /**
     * 
     */
,
    chinese: function() { return null; }
    /**
     * 
     */
,
    coptic: function() { return null; }
    /**
     * The user’s preferred calendar
     */
,
    current: function() { return null; }
    /**
     * 
     */
,
    ethiopicAmeteAlem: function() { return null; }
    /**
     * 
     */
,
    ethiopicAmeteMihret: function() { return null; }
    /**
     * The Gregorian calendar.
     */
,
    gregorian: function() { return null; }
    /**
     * 
     */
,
    hebrew: function() { return null; }
    /**
     * 
     */
,
    indian: function() { return null; }
    /**
     * 
     */
,
    islamic: function() { return null; }
    /**
     * 
     */
,
    islamicCivil: function() { return null; }
    /**
     * 
     */
,
    islamicTabular: function() { return null; }
    /**
     * 
     */
,
    islamicUmmAlQura: function() { return null; }
    /**
     * 
     */
,
    iso8601: function() { return null; }
    /**
     * 
     */
,
    japanese: function() { return null; }
    /**
     * 
     */
,
    persian: function() { return null; }
    /**
     * 
     */
,
    republicOfChina: function() { return null; }
    /**
     * Returns a new Date by adding the given DateComponents, or null if no date could be calculated.
     * @param {Date} date
     * @param {DateComponents} components
     */
,
    dateByAddingDateComponents: function(date, components) { }
    /**
     * Returns a new Date from the given DateComponents, or null if no date could be calculated.
     * @param {DateComponents} components
     */
,
    dateFromDateComponents: function(components) { }
    /**
     * Returns a new DateComponents for the given Date.
     * @param {Date} date
     */
,
    dateComponentsFromDate: function(date) { }
    /**
     * Returns the difference from the start Date to the end Date as a DateComponents.
     * @param {Date} start
     * @param {Date} end
     */
,
    dateComponentsBetweenDates: function(start, end) { }
    /**
     * Returns a Date for the first moment of the day containing the given Date according to this Calendar.
     * @param {Date} date
     */
,
    startOfDay: function(date) { }
    /**
     * The ISO identifier for the calendar.
     */
,
    identifier: function() { return null; }
    /**
     * The locale of the calendar.
     */
,
    locale: function() { return null; }
    /**
     * The time zone of the calendar.
     */
,
    timeZone: function() { return null; }
};

globalThis.Calendar = Calendar;


/**
 * 
 */
class Color {

    /**
     * Makes a new color in the RGB colorspace, with the given components. If the alpha component is not given, 1.0 is used.
     * @param {Number} r
     * @param {Number} g
     * @param {Number} b
     * @param {Number=} a
     */
    static     RGB(r, g, b, a) { }

    /**
     * Makes a new color in the HSB colorspace, with the given components. If the alpha component is not given, 1.0 is used.
     * @param {Number} h
     * @param {Number} s
     * @param {Number} b
     * @param {Number=} a
     */
    static     HSB(h, s, b, a) { }

    /**
     * Makes a new color in the White colorspace, with the given components. If the alpha component is not given, 1.0 is used.
     * @param {Number} w
     * @param {Number=} a
     */
    static     White(w, a) { }

    /**
     * A color in the White colorspace with white component of 0.0.
     */
    static get black() { return null; }

    /**
     * A color in the RGB colorspace with components (0, 0, 1, 1).
     */
    static get blue() { return null; }

    /**
     * A color in the RGB colorspace with components (0.6, 0.4, 0.2, 1).
     */
    static get brown() { return null; }

    /**
     * A color in the White colorspace with white component of 0.0 and alpha of 0.0 (“transparent black”).
     */
    static get clear() { return null; }

    /**
     * A color in the RGB colorspace with components (0, 1, 1, 1).
     */
    static get cyan() { return null; }

    /**
     * A color in the White colorspace with white component of 0.333.
     */
    static get darkGray() { return null; }

    /**
     * A color in the White colorspace with white component of 0.5.
     */
    static get gray() { return null; }

    /**
     * A color in the RGB colorspace with components (0, 1, 0, 1).
     */
    static get green() { return null; }

    /**
     * A color in the White colorspace with white component of 0.667.
     */
    static get lightGray() { return null; }

    /**
     * A color in the RGB colorspace with components (1, 0, 1, 1).
     */
    static get magenta() { return null; }

    /**
     * A color in the RGB colorspace with components (1, 0.5, 0, 1).
     */
    static get orange() { return null; }

    /**
     * A color in the RGB colorspace with components (1, 0, 1, 1).
     */
    static get purple() { return null; }

    /**
     * A color in the RGB colorspace with components (1, 0, 0, 1).
     */
    static get red() { return null; }

    /**
     * A color in the White colorspace with white component of 1.0.
     */
    static get white() { return null; }

    /**
     * A color in the RGB colorspace with components (1, 1, 0, 1).
     */
    static get yellow() { return null; }

    /**
     * Returns a new color that is a linear combination of the receiver and fraction of the other color (so, a fraction of 1.0 would just return the otherColor. If the colors cannot be blended (for example, if they cannot be converted to the same colorspace), then null is returned.
     * @param {Color} otherColor
     * @param {Number} fraction
     */
    blend(otherColor, fraction) { }

    /**
     * Returns the alpha component of the color.
     */
get alpha() { return null; }

    /**
     * Returns the blue component of the color, after converting to a RGB colorspace.
     */
get blue() { return null; }

    /**
     * Returns the brightness component of the color, after converting to a HSB colorspace.
     */
get brightness() { return null; }

    /**
     * Returns the colorspace of the instance.
     */
get colorSpace() { return null; }

    /**
     * Returns the green component of the color, after converting to a RGB colorspace.
     */
get green() { return null; }

    /**
     * Returns the hue component of the color, after converting to a HSB colorspace.
     */
get hue() { return null; }

    /**
     * Returns the red component of the color, after converting to a RGB colorspace.
     */
get red() { return null; }

    /**
     * Returns the saturation component of the color, after converting to a HSB colorspace.
     */
get saturation() { return null; }

    /**
     * Returns the white component of the color, after converting to a White colorspace.
     */
get white() { return null; }
}


/**
 * 
 */
class ColorSpace {

    /**
     * A colorspace with cyan, magenta, yellow, black, and alpha components.
     */
    static get CMYK() { return null; }

    /**
     * A colorspace with hue, saturation, and value (or brightness) components.
     */
    static get HSB() { return null; }

    /**
     * A space for named colors, like system defined colors, or specific color palette spaces.
     */
    static get Named() { return null; }

    /**
     * A colorspace that wraps a pattern image.
     */
    static get Pattern() { return null; }

    /**
     * The sRGB colorspace with red, green, blue, and alpha components.
     */
    static get RGB() { return null; }

    /**
     * A colorspace with white and alpha components.
     */
    static get White() { return null; }

    /**
     * 
     */
    static get all() { return null; }
}


/**
 * CombinedValues is used as the object of a tree node in perspectives that group by a combined set of objects (currently only Tags).
 */
class CombinedValues {

    /**
     * The name displayed for this group.
     */
get name() { return null; }

    /**
     * The values included in the group.
     */
get values() { return null; }
}


/**
 * The Console allows scripts to log debugging, warning, or error information where it can be viewed in the system console or in the console output area. A single instance of Console is available to scripts as the console global variable.
 */
class Console {

    /**
     * Appends a line to the application console formed by concatenating the given message (after converting it to a String), any additional arguments separated by spaces, and finally a newline.
     * @param {Object} message
     * @param {Array.<Object=>} additional
     */
    log(message, additional) { }

    /**
     * 
     * @param {Object} message
     * @param {Array.<Object=>} additional
     */
    error(message, additional) { }

    /**
     * 
     * @param {Object} message
     * @param {Array.<Object=>} additional
     */
    info(message, additional) { }

    /**
     * Just calls Console.log, currently.
     * @param {Object} message
     * @param {Array.<Object=>} additional
     */
    warn(message, additional) { }

    /**
     * Clears the console in the user-visible window.
     */
    clear() { }
}


/**
 * The Credentials class allows storage of private username and password pairs, URL.Bookmark instances, and possibly other sensitive information in the future. Instances are tied to a single plug-in and single application, and may only be created in plug-ins when they are being loaded.
 */
class Credentials {

    /**
     * Creates a new Credentials instance for the currently loading plug-in. Throws an error if called outside of plug-in loading.
     */
    constructor() { }

    /**
     * Looks up the current credentials for a given service identifier. If credentials have previously been stored, an object will be returned containing "user" an "password" properties.
     * @param {String} service
     */
    read(service) { }

    /**
     * Creates or updates an existing credential, storing the username and password for this service securely in the Keychain.
     * @param {String} service
     * @param {String} username
     * @param {String} password
     */
    write(service, username, password) { }

    /**
     * Deletes any currently stored credentials for the specified service, either a username and password or a URL bookmark.
     * @param {String} service
     */
    remove(service) { }

    /**
     * Reads the entry for the given service identifier and attempts to return it as a URL.Bookmark, or null if no such entry exists.
     * @param {String} service
     */
    readBookmark(service) { }

    /**
     * Stores the URL.Bookmark persistently for later access.
     * @param {String} service
     * @param {URL.Bookmark} bookmark
     */
    writeBookmark(service, bookmark) { }
}


/**
 * Crypto provides access to some of Apple’s CryptoKit
 */
class Crypto {

    /**
     * Copy length bytes of cryptographically secure random data.
     * @param {Number} length
     */
    static     randomData(length) { }
}


/**
 * The SHA–256 hash function.
 */

/**
 * The SHA–384 hash function.
 */

/**
 * The SHA–512 hash function.
 */

/**
 * A generic bag of bytes. Mainly useful to be interpreted / converted to some other type.
 */
class Data {

    /**
     * Convert the string to a Data using the given encoding, or UTF8 if none is specified.
     * @param {String} string
     * @param {StringEncoding=} encoding
     */
    static     fromString(string, encoding) { }

    /**
     * 
     * @param {String} string
     */
    static     fromBase64(string) { }

    /**
     * Convert to a String, assuming that this Data using the specified encoding, or UTF8 if none is given.
     * @param {StringEncoding=} encoding
     */
    toString(encoding) { }

    /**
     * Convert to a Base–64 encoded string.
     */
    toBase64() { }

    /**
     * Number of bytes in this data.
     */
get length() { return null; }

    /**
     * 
     */
get toObject() { return null; }
}


/**
 * 
 */
class Database {

    /**
     * Returns the DatabaseObject for the given URL, if it exists.
     * @param {URL} url
     */
    objectForURL(url) { }

    /**
     * Returns the first top-level Tag with the given name, or null.
     * @param {String} name
     */
    tagNamed(name) { }

    /**
     * Returns the first top-level Folder with the given name, or null.
     * @param {String} name
     */
    folderNamed(name) { }

    /**
     * Returns the first top-level Project with the given name, or null.
     * @param {String} name
     */
    projectNamed(name) { }

    /**
     * Returns each existing Project that Smart Matches the given search. The result will be in the same order and have the same projects as would be found when searching this string in the Quick Open window.
     * @param {String} search
     */
    projectsMatching(search) { }

    /**
     * Returns each existing Folder that Smart Matches the given search. The result will be in the same order and have the same folders as would be found when searching this string in the Quick Open window.
     * @param {String} search
     */
    foldersMatching(search) { }

    /**
     * Returns each existing Tag that Smart Matches the search. The result will be in the same order and have the same tags as would be found when searching this string in the Quick Open window.
     * @param {String} search
     */
    tagsMatching(search) { }

    /**
     * Returns the first top-level Task in the inbox with the given name, or null.
     * @param {String} name
     */
    taskNamed(name) { }

    /**
     * Saves any unsaved changes to disk. If sync is enabled and there were unsaved changes, this also triggers a sync request.
     */
    save() { }

    /**
     * Moves tasks to a different location.
     * @param {Array.<Task>} tasks
     * @param {Project} position
     * @param {*} Task
     * @param {*} or_Task_ChildInsertionLocation
     */
    moveTasks(tasks, position, Task, or_Task_ChildInsertionLocation) { }

    /**
     * Makes copies of the tasks and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
     * @param {Array.<Task>} tasks
     * @param {Project} position
     * @param {*} Task
     * @param {*} or_Task_ChildInsertionLocation
     */
    duplicateTasks(tasks, position, Task, or_Task_ChildInsertionLocation) { }

    /**
     * Converts tasks to new projects at the specified location.
     * @param {Array.<Task>} tasks
     * @param {Folder|Folder.ChildInsertionLocation} position
     */
    convertTasksToProjects(tasks, position) { }

    /**
     * Moves sections to a different location.
     * @param {Array.<Project|Folder>} sections
     * @param {Folder|Folder.ChildInsertionLocation} position
     */
    moveSections(sections, position) { }

    /**
     * Makes copies of the sections and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
     * @param {Array.<Project|Folder>} sections
     * @param {Folder|Folder.ChildInsertionLocation} position
     */
    duplicateSections(sections, position) { }

    /**
     * Moves tags to a different location.
     * @param {Array.<Tag>} tags
     * @param {Tag|Tag.ChildInsertionLocation} position
     */
    moveTags(tags, position) { }

    /**
     * Makes copies of the tags and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.
     * @param {Array.<Tag>} tags
     * @param {Tag|Tag.ChildInsertionLocation} position
     */
    duplicateTags(tags, position) { }

    /**
     * Processes inbox items that have the required information to move into their proposed containers, performs any delayed filtering, and deletes empty items.
     */
    cleanUp() { }

    /**
     * Undoes the last undoable action, or throws an error if there are no undoable actions.
     */
    undo() { }

    /**
     * Redoes the next redoable action, or throws an error if there are no redoable actions.
     */
    redo() { }

    /**
     * Removes the object from the Database.
     * @param {DatabaseObject} object
     */
    deleteObject(object) { }

    /**
     * Copies the given tasks to the pasteboard in a variety of formats.
     * @param {Array.<Task>} tasks
     * @param {Pasteboard} pasteboard
     */
    copyTasksToPasteboard(tasks, pasteboard) { }

    /**
     * Returns true if the pasteboard contains a type that can be imported as tasks.
     * @param {Pasteboard} pasteboard
     */
    canPasteTasks(pasteboard) { }

    /**
     * Reads the most relevant pasteboard type and imports them as tasks. The tasks should then be moved to the desired destination.
     * @param {Pasteboard} pasteboard
     */
    pasteTasksFromPasteboard(pasteboard) { }

    /**
     * Returns the shared Application.
     */
get app() { return null; }

    /**
     * Returns a base Style suitable for creating new Text instances.
     */
get baseStyle() { return null; }

    /**
     * Returns true if there are redoable actions.
     */
get canRedo() { return null; }

    /**
     * Returns true if there are undoable actions.
     */
get canUndo() { return null; }

    /**
     * Returns the shared Console.
     */
get console() { return null; }

    /**
     * 
     */
get document() { return null; }

    /**
     * Returns a flat array of all folders in the database, sorted by their order in the database.
     */
get flattenedFolders() { return null; }

    /**
     * Returns a flat array of all projects in the database, sorted by their order in the database.
     */
get flattenedProjects() { return null; }

    /**
     * Returns a flat array of all folders and project in the database, sorted by their order in the database.
     */
get flattenedSections() { return null; }

    /**
     * Returns a flat array of all tags in the database, sorted by their order in the database.
     */
get flattenedTags() { return null; }

    /**
     * Returns a flat array of all tasks in the database, including inbox items, root tasks for projects, task groups and individual tasks. Tasks are sorted by their order in the database, with the inbox preceeding the library.
     */
get flattenedTasks() { return null; }

    /**
     * Returns the top-level folders in the database.
     */
get folders() { return null; }

    /**
     * Returns a copy of the Tasks currently in the inbox.
     */
get inbox() { return null; }

    /**
     * Returns the top-level folders and projects in the database.
     */
get library() { return null; }

    /**
     * Returns the top-level folders in the database.
     */
get projects() { return null; }

    /**
     * 
     */
get settings() { return null; }

    /**
     * Returns the top-level tags in the database.
     */
get tags() { return null; }
}


/**
 * 
 */

/**
 * 
 */

/**
 * 
 */
class DatabaseObject {

    /**
     * Returns the identifier for this object.
     */
get id() { return null; }

    /**
     * Returns a URL which links to this object, if one exists
     */
get url() { return null; }
}


/**
 * 
 */
class DatedObject extends DatabaseObject {

    /**
     * Returns the date the object was first saved. If the object is newly inserted, this will be null. For newly inserted objects, the added property may be set (but once an object is saved for the first time, the property is read-only).
     */
get added() { return null; }

    /**
     * Returns the date the object was most recently modified. If the object is newly inserted, this will be null. For newly inserted objects, the modified property may be set (but once an object is saved for the first time, the property is read-only).
     */
get modified() { return null; }
}


/**
 * 
 */
class ActiveObject extends DatedObject {

    /**
     * If true, then this object is considered active, otherwise the object is considered dropped.
     */
get active() { return null; }

    /**
     * Returns true if this object and all its containers are active.
     */
get effectiveActive() { return null; }
}


/**
 * 
 */
class Folder extends ActiveObject {

    /**
     * Returns the Folder with the specified identifier, or null if no such folder exists.
     * @param {String} identifier
     */
    static     byIdentifier(identifier) { }

    /**
     * 
     * @param {String} name
     * @param {Folder|Folder.ChildInsertionLocation=} position
     */
    constructor(name, position) { }

    /**
     * Returns the first child Folder with the given name that is contained directly in this folder, or null.
     * @param {String} name
     */
    folderNamed(name) { }

    /**
     * Returns the first child Project of this folder with the given name, or null.
     * @param {String} name
     */
    projectNamed(name) { }

    /**
     * Returns the first child Folder or Project in this folder with the given name, or null.
     * @param {String} name
     */
    sectionNamed(name) { }

    /**
     * An alias for sectionNamed.
     * @param {String} name
     */
    childNamed(name) { }

    /**
     * Calls the given function for this Folder and recursively into any child folders and projects. The tasks within any projects are not included. The supplied function can optionally return a ApplyResult to skip enumeration of some elements.
     * @param {Function(folder} fn
     */
    apply(fn) { }

    /**
     * Returns a location referring to the position just after this folder within its containing Folder or Database.
     */
get after() { return null; }

    /**
     * Returns a location referring to the position just before this folder within its containing Folder or Database.
     */
get before() { return null; }

    /**
     * Returns a location referring to the the beginning of the contained projects and folders in this folder.
     */
get beginning() { return null; }

    /**
     * An alias for sections.
     */
get children() { return null; }

    /**
     * Returns a location referring to the the ending of the contained projects and folders in this folder.
     */
get ending() { return null; }

    /**
     * An alias for flattenedSections.
     */
get flattenedChildren() { return null; }

    /**
     * Returns a flat array of all folders in this folder, sorted by their order in the database.
     */
get flattenedFolders() { return null; }

    /**
     * Returns a flat array of all projects in this folder, sorted by their order in the database.
     */
get flattenedProjects() { return null; }

    /**
     * Returns a flat array of all folders and project in this folder, sorted by their order in the database.
     */
get flattenedSections() { return null; }

    /**
     * Returns the folders contained directly as children of this folder.
     */
get folders() { return null; }

    /**
     * The name of the folder.
     */
get name() { return null; }

    /**
     * The parent Folder which contains this folder.
     */
get parent() { return null; }

    /**
     * Returns the projects contained directly as children of this folder.
     */
get projects() { return null; }

    /**
     * Returns a sorted list of the folders and projects contained directly within this folder.
     */
get sections() { return null; }

    /**
     * The folder’s status.
     */
get status() { return null; }
}


/**
 * 
 */
class Tag extends ActiveObject {

    /**
     * Returns the Tag with the specified identifier, or null if no such tag exists.
     * @param {String} identifier
     */
    static     byIdentifier(identifier) { }

    /**
     * The Forecast Tag, if it is set.
     */
    static get forecastTag() { return null; }

    /**
     * 
     * @param {String} name
     * @param {Tag|Tag.ChildInsertionLocation=} position
     */
    constructor(name, position) { }

    /**
     * Returns the first child Tag with the given name that is contained directly in this tag, or null.
     * @param {String} name
     */
    tagNamed(name) { }

    /**
     * An alias for tagNamed.
     * @param {String} name
     */
    childNamed(name) { }

    /**
     * Returns a location indicating the position before an existing task in the Tag’s tasks. If no peer Task is specified, or the the specified task is not in the tag’s tasks, this is equivalent to beginningOfTasks.
     * @param {Task=} task
     */
    beforeTask(task) { }

    /**
     * Returns a location indicating the position after an existing task in the Tag’s tasks. If no peer Task is specified, or the the specified task is not in the tag’s tasks, this is equivalent to endingOfTasks.
     * @param {Task=} task
     */
    afterTask(task) { }

    /**
     * Moves an existing associated Task within the tag’s list of tasks. If the task is not associated with the tag, no change is made.
     * @param {Task} task
     * @param {Tag.TaskInsertionLocation} location
     */
    moveTask(task, location) { }

    /**
     * Moves a list of associated Tasks within the tag’s list of tasks. Any tasks not currently associated with the tag are ignored.
     * @param {Array.<Task>} tasks
     * @param {Tag.TaskInsertionLocation} location
     */
    moveTasks(tasks, location) { }

    /**
     * Calls the given function for this Tag and recursively into any child tags. The supplied function can optionally return a ApplyResult to skip enumeration of some elements.
     * @param {Function(tag} fn
     */
    apply(fn) { }

    /**
     * Returns a location referring to the position just after this tag.
     */
get after() { return null; }

    /**
     * If set and the tag is active, tasks with this tag applied cannot be the next task of a project.
     */
get allowsNextAction() { return null; }

    /**
     * Returns a sorted list of the tasks associated with this tag that are currently available. Recent changes may not be reflected until a cleanUp is performed on the database.
     */
get availableTasks() { return null; }

    /**
     * Returns a location referring to the position just before this tag.
     */
get before() { return null; }

    /**
     * Returns a location referring to the beginning of the contained tags in this tag.
     */
get beginning() { return null; }

    /**
     * Returns a location indicating the position before all of the Tags tasks.
     */
get beginningOfTasks() { return null; }

    /**
     * An alias for tags.
     */
get children() { return null; }

    /**
     * Returns a location referring to the ending of the contained tags in this tag.
     */
get ending() { return null; }

    /**
     * Returns a location indicating the position after all of the Tags tasks.
     */
get endingOfTasks() { return null; }

    /**
     * An alias for flattenedTags.
     */
get flattenedChildren() { return null; }

    /**
     * Returns a flat array of all tags contained within this tag. Tags are sorted by their order in the database.
     */
get flattenedTags() { return null; }

    /**
     * 
     */
get name() { return null; }

    /**
     * The parent Tag which contains this tag.
     */
get parent() { return null; }

    /**
     * A convenience property that returns only Projects for the root tasks associated with this Tag.
     */
get projects() { return null; }

    /**
     * Returns a sorted list of the tasks associated with this tag that remaing to be completed. Recent changes may not be reflected until a cleanUp is performed on the database.
     */
get remainingTasks() { return null; }

    /**
     * The current status of the tag as a whole, which is derived from allowsNextAction and active.
     */
get status() { return null; }

    /**
     * Returns a sorted list of the tags contained directly within this tag, sorted by their library order.
     */
get tags() { return null; }

    /**
     * Returns a sorted list of the tasks associated with this tag.
     */
get tasks() { return null; }
}


/**
 * 
 */
class Task extends ActiveObject {

    /**
     * Returns an array of tasks by parsing the transport text formatted input. Optionally, only the first task can be requested (but will still be returned in an array).
     * @param {String} text
     * @param {Boolean=} singleTask
     */
    static     byParsingTransportText(text, singleTask) { }

    /**
     * Returns the Task with the specified identifier, or null if no such task exists.
     * @param {String} identifier
     */
    static     byIdentifier(identifier) { }

    /**
     * Returns a new Task at the given location. If a project or task is given as a location, the new task is placed at the end of the children of that parent. If no location is specified, then the task is created at the end of the inbox.
     * @param {String} name
     * @param {Project} position
     * @param {*} Task
     * @param {*} or_Task_ChildInsertionLocation_or_null
     */
    constructor(name, position, Task, or_Task_ChildInsertionLocation_or_null) { }

    /**
     * Returns the first child Task with the given name that is contained directly in this task, or null.
     * @param {String} name
     */
    taskNamed(name) { }

    /**
     * An alias for taskNamed.
     * @param {String} name
     */
    childNamed(name) { }

    /**
     * Appends stringToAppend to the end of the Task’s note.
     * @param {String} stringToAppend
     */
    appendStringToNote(stringToAppend) { }

    /**
     * Links a file URL to this task. In order to be considered a file URL, url must have the file scheme. That is, url must be of the form file://path-to-file. The file at url will not be added to database, rather a bookmark leading to it will be added. In order to add files to a task, use the addAttachment function. Linking files is especially useful for large files, as including large files in the database can degrade app performance.
     * @param {URL} url
     */
    addLinkedFileURL(url) { }

    /**
     * Removes the first link to a file with the given url. This removes the bookmark that leads to the file at url. If the file itself is present in the database, use the removeAttachmentAtIndex function instead.
     * @param {URL} url
     */
    removeLinkedFileWithURL(url) { }

    /**
     * Adds attachment as an attachment to the task. If the attachment is large, consider using the addLinkedFileURL function instead. Including large attachments in the database can degrade app performance.
     * @param {FileWrapper} attachment
     */
    addAttachment(attachment) { }

    /**
     * Removes the attachment at index from this task’s attachments array.
     * @param {Number} index
     */
    removeAttachmentAtIndex(index) { }

    /**
     * Returns a location indicating the position before an existing tag in the Task’s tags. If no peer Tag is specified, or the the specified tag is not in the task’s tags, this is equivalent to beginningOfTags.
     * @param {Tag=} tag
     */
    beforeTag(tag) { }

    /**
     * Returns a location indicating the position after an existing tag in the Task’s tags. If no peer Tag is specified, or the the specified tag is not in the task’s tags, this is equivalent to endingOfTags.
     * @param {Tag=} tag
     */
    afterTag(tag) { }

    /**
     * Adds a Tag to this task at the specified location relative to its other tags, or at the end if no location is specified. If the tag is already present, no change is made. The Database function moveTags can be used to control the ordering of tags within the task.
     * @param {Tag} tag
     * @param {Task.TagInsertionLocation=} location
     */
    addTag(tag, location) { }

    /**
     * Adds multiple Tags to this this task at the specified location relative to its other tags, or at the end if no location is specified.. For any tags already associated with the Task, no change is made. The Database function moveTags can be used to control the ordering of tags within the task.
     * @param {Array.<Tag>} tags
     * @param {Task.TagInsertionLocation=} location
     */
    addTags(tags, location) { }

    /**
     * Moves an existing associated Tag within the task’s list of tags. If the tag is not associated with the task, no change is made.
     * @param {Tag} tag
     * @param {Task.TagInsertionLocation} location
     */
    moveTag(tag, location) { }

    /**
     * Moves a list of associated Tags within the task’s list of tags. Any tags not currently associated with the task are ignored.
     * @param {Array.<Tag>} tags
     * @param {Task.TagInsertionLocation} location
     */
    moveTags(tags, location) { }

    /**
     * Removes a Tag from this task. If the tag is not associated with this task, no change is made.
     * @param {Tag} tag
     */
    removeTag(tag) { }

    /**
     * Removes multiple Tags from this task. If a tag is not associated with this task, no change is made.
     * @param {Array.<Tag>} tags
     */
    removeTags(tags) { }

    /**
     * Removes multiple Tags from this task. If a tag is not associated with this task, no change is made.
     */
    clearTags() { }

    /**
     * If the task is not completed, marks it as complete with the given completion date (or the current date if no date is specified). For repeating tasks, this makes a clone of the task and marks that clone as completed. In either case, the task that has been marked completed is returned.
     * @param {Date=} date
     */
    markComplete(date) { }

    /**
     * If the task is completed, marks it as incomplete.
     */
    markIncomplete() { }

    /**
     * Drops this Task. If true is passed in for allOccurrences then this task will not repeat, even if it has a repititionRule set on it. If false is passed in for allOccurrences, this task will repeat as normal. If dateDropped is specified, it will be used as the drop date.
     * @param {Boolean} allOccurrences
     * @param {Date=} dateDropped
     */
    drop(allOccurrences, dateDropped) { }

    /**
     * Calls the given function for this Task and recursively into any child task. The supplied function can optionally return a ApplyResult to skip enumeration of some elements.
     * @param {Function(task} fn
     */
    apply(fn) { }

    /**
     * Add a notification from the specification in info. Supplying a Date creates an absolute notification that will fire at that date. Supplying a Double will create a due-relative notification. Specifying a due relative notification when this task’s effectiveDueDate is not set will result in an error.
     * @param {Number|Date} info
     */
    addNotification(info) { }

    /**
     * Remove an active notification for this task. Supplying a notification that is not in this task’s notifications array, or a notification that has task to something other than this task results in an error.
     * @param {Task.Notification} notification
     */
    removeNotification(notification) { }

    /**
     * The location after this task within its parent task’s children. If this task has no parent task, then this is the position adjacent to it in its container.
     */
get after() { return null; }

    /**
     * For tasks in the inbox, the tentatively assigned project or parent task, which will be applied on cleanup.
     */
get assignedContainer() { return null; }

    /**
     * An array of FileWrapper objects representing the attachments associated with the task.
     */
get attachments() { return null; }

    /**
     * The location before this task within its parent task’s children. If this task has no parent task, then this is the position adjacent to it in its container.
     */
get before() { return null; }

    /**
     * The location at the beginning of this task’s children.
     */
get beginning() { return null; }

    /**
     * Returns a location indicating the position before all of the Tasks tags.
     */
get beginningOfTags() { return null; }

    /**
     * An alias for tasks.
     */
get children() { return null; }

    /**
     * True if the task has been marked completed. Note that a task may be effectively considered completed if a containing task is marked completed.
     */
get completed() { return null; }

    /**
     * If set, the Task will be automatically marked completed when its last child Task is marked completed.
     */
get completedByChildren() { return null; }

    /**
     * If set, the Task is completed.
     */
get completionDate() { return null; }

    /**
     * The Project that this Task is contained in, either as the root of the project or indirectly from a parent task. If this task is in the inbox, then this will be null.
     */
get containingProject() { return null; }

    /**
     * If set, the Task is not actionable until this date.
     */
get deferDate() { return null; }

    /**
     * If set, the Task is dropped.
     */
get dropDate() { return null; }

    /**
     * If set, the Task should be completed by this date.
     */
get dueDate() { return null; }

    /**
     * Deprecated: Please use the effectiveCompletionDate property instead.
     */
get effectiveCompletedDate() { return null; }

    /**
     * Returns the computed effective completion date for the Task, based on its local completionDate and those of its containers.
     */
get effectiveCompletionDate() { return null; }

    /**
     * Returns the computed effective defer date for the Task, based on its local deferDate and those of its containers.
     */
get effectiveDeferDate() { return null; }

    /**
     * Returns the computed effective drop date for the Task, based on its local dropDate and those of its containers.
     */
get effectiveDropDate() { return null; }

    /**
     * Returns the computed effective due date for the Task, based on its local dateDue and those of its containers.
     */
get effectiveDueDate() { return null; }

    /**
     * Returns the computed effective flagged status for the Task, based on its local flagged and those of its containers.
     */
get effectiveFlagged() { return null; }

    /**
     * The location at the end of this task’s children.
     */
get ending() { return null; }

    /**
     * Returns a location indicating the position after all of the Tasks tags.
     */
get endingOfTags() { return null; }

    /**
     * The estimated number of minutes this task will take to finish, or null if no estimate has been made.
     */
get estimatedMinutes() { return null; }

    /**
     * The flagged status of the task.
     */
get flagged() { return null; }

    /**
     * An alias for flattenedTasks.
     */
get flattenedChildren() { return null; }

    /**
     * Returns a flat array of all tasks contained within this task. Tasks are sorted by their order in the database.
     */
get flattenedTasks() { return null; }

    /**
     * Returns true if this task has children, more efficiently than checking if children is empty.
     */
get hasChildren() { return null; }

    /**
     * True if the task is a direct child of the inbox, but not if the task is contained by another task that is in the inbox.
     */
get inInbox() { return null; }

    /**
     * The list of file URLs linked to this task. The files at these URLs are not present in the database, rather the database holds bookmarks leading to these files. These links can be read on iOS, but not written to.
     */
get linkedFileURLs() { return null; }

    /**
     * The title of the task.
     */
get name() { return null; }

    /**
     * The task’s note.
     */
get note() { return null; }

    /**
     * The task’s note as a rich Text object.
     */
get noteText() { return null; }

    /**
     * An array of the notifications that are active for this task.
     */
get notifications() { return null; }

    /**
     * The parent Task which contains this task.
     */
get parent() { return null; }

    /**
     * The Project that this Task is the root task of, or null if this task is in the inbox or contained by another task.
     */
get project() { return null; }

    /**
     * The object holding the repetition properties for this task, or null if it is not repeating.
     */
get repetitionRule() { return null; }

    /**
     * If true, then children of this task form a dependency chain. For example, the first task blocks the second one until the first is completed.
     */
get sequential() { return null; }

    /**
     * When set, the dueDate and deferDate properties will use floating time zones. (Note: if a Task has no due or defer dates assigned, this property will revert to the database’s default setting.)
     */
get shouldUseFloatingTimeZone() { return null; }

    /**
     * Returns the Tags associated with this Task.
     */
get tags() { return null; }

    /**
     * Returns the current status of the task.
     */
get taskStatus() { return null; }

    /**
     * Returns all the tasks contained directly in this task, sorted by their library order.
     */
get tasks() { return null; }
}


/**
 * 
 */

/**
 * 
 */

/**
 * 
 */
class Project extends DatabaseObject {

    /**
     * Returns the Project with the specified identifier, or null if no such project exists.
     * @param {String} identifier
     */
    static     byIdentifier(identifier) { }

    /**
     * 
     * @param {String} name
     * @param {Folder|Folder.ChildInsertionLocation=} position
     */
    constructor(name, position) { }

    /**
     * Returns the first top-level Task in this project the given name, or null.
     * @param {String} name
     */
    taskNamed(name) { }

    /**
     * Appends stringToAppend to the end of the Project’s root Task’s note.
     * @param {String} stringToAppend
     */
    appendStringToNote(stringToAppend) { }

    /**
     * Adds attachment as an attachment to the Project’s root Task. If the attachment is large, consider using the addLinkedFileURL function instead. Including large attachments in the database can degrade app performance.
     * @param {FileWrapper} attachment
     */
    addAttachment(attachment) { }

    /**
     * Removes the attachment at index from this Project’s root Task’s attachments array.
     * @param {Number} index
     */
    removeAttachmentAtIndex(index) { }

    /**
     * If the project is not completed, marks it as complete with the given completion date (or the current date if no date is specified). For repeating project, this makes a clone of the project and marks that clone as completed. In either case, the project that has been marked completed is returned.
     * @param {Date=} date
     */
    markComplete(date) { }

    /**
     * If the project is completed, marks it as incomplete.
     */
    markIncomplete() { }

    /**
     * Add a notification to the project from the specification in info. Supplying a Date creates an absolute notification that will fire at that date. Supplying a Double will create a due-relative notification. Specifying a due-relative notification when this project’s task’s effectiveDueDate is not set will result in an error.
     * @param {Number|Date} info
     */
    addNotification(info) { }

    /**
     * Remove an active notification for this project. Supplying a notification that is not in this task’s notifications array, or a notification that has task to something other than this project’s task results in an error.
     * @param {Task.Notification} notification
     */
    removeNotification(notification) { }

    /**
     * Adds a Tag to this project, appending it to the end of the list of associated tags. If the tag is already present, no change is made. The Database function moveTags can be used to control the ordering of tags within the task.
     * @param {Tag} tag
     */
    addTag(tag) { }

    /**
     * Adds multiple Tags to this project, appending them to the end of the list of associated tags. For any tags already associated with the Task, no change is made. The Database function moveTags can be used to control the ordering of tags within the task.
     * @param {Array.<Tag>} tags
     */
    addTags(tags) { }

    /**
     * Removes a Tag from this project. If the tag is not associated with this project, no change is made.
     * @param {Tag} tag
     */
    removeTag(tag) { }

    /**
     * Removes multiple Tags from this project. If a tag is not associated with this project, no change is made.
     * @param {Array.<Tag>} tags
     */
    removeTags(tags) { }

    /**
     * Removes multiple Tags from this project. If a tag is not associated with this project, no change is made.
     */
    clearTags() { }

    /**
     * Links a file URL to this task. In order to be considered a file URL, url must have the file scheme. That is, url must be of the form file://path-to-file. The file at url will not be added to database, rather a bookmark leading to it will be added. In order to add files to a task, use the addAttachment function. Linking files is especially useful for large files, as including large files in the database can degrade app performance. This function throws an error if invoked on iOS.
     * @param {URL} url
     */
    addLinkedFileURL(url) { }

    /**
     * Removes the first link to a file with the given url. This removes the bookmark that leads to the file at url. If the file itself is present in the database, use the removeAttachmentAtIndex function instead.
     * @param {URL} url
     */
    removeLinkedFileWithURL(url) { }

    /**
     * Returns a location referring to the position just after this project within its containing Folder or Database.
     */
get after() { return null; }

    /**
     * An array of FileWrapper objects representing the attachments associated with the Project’s root Task.
     */
get attachments() { return null; }

    /**
     * Returns a location referring to the position just before this project within its containing Folder or Database.
     */
get before() { return null; }

    /**
     * Returns a location referring to the position after the last Task directly contained in the root task of this project.
     */
get beginning() { return null; }

    /**
     * An alias for tasks.
     */
get children() { return null; }

    /**
     * True if the project has been marked completed. Note that a project may be effectively considered completed if a containing project is marked completed.
     */
get completed() { return null; }

    /**
     * If set, the project will be automatically marked completed when its last child Task is marked completed.
     */
get completedByChildren() { return null; }

    /**
     * If set, the project is completed.
     */
get completionDate() { return null; }

    /**
     * If set to true, the project contains single tasks, and has no next task.
     */
get containsSingletonActions() { return null; }

    /**
     * If set to true, this is the Project that inbox tasks that have enough information specified (as selected by the user’s preferences) will be filed into upon a clean-up.
     */
get defaultSingletonActionHolder() { return null; }

    /**
     * If set, the project is not actionable until this date.
     */
get deferDate() { return null; }

    /**
     * If set, the project is dropped.
     */
get dropDate() { return null; }

    /**
     * If set, the project should be completed by this date.
     */
get dueDate() { return null; }

    /**
     * Returns the computed effective completion date for the Project, based on its local completionDate and those of its containers.
     */
get effectiveCompletedDate() { return null; }

    /**
     * Returns the computed effective defer date for the Project, based on its local deferDate and those of its containers.
     */
get effectiveDeferDate() { return null; }

    /**
     * Returns the computed effective drop date for the Project, based on its local dropDate and those of its containers.
     */
get effectiveDropDate() { return null; }

    /**
     * Returns the computed effective due date for the Project, based on its local dateDue and those of its containers.
     */
get effectiveDueDate() { return null; }

    /**
     * Returns the computed effective flagged status for the Project, based on its local flagged and those of its containers.
     */
get effectiveFlagged() { return null; }

    /**
     * Returns a location referring to the position before the first Task directly contained in the root task of this project.
     */
get ending() { return null; }

    /**
     * The estimated number of minutes this Project will take to finish, or null if no estimate has been made.
     */
get estimatedMinutes() { return null; }

    /**
     * The flagged status of the project.
     */
get flagged() { return null; }

    /**
     * An alias for flattenedTasks.
     */
get flattenedChildren() { return null; }

    /**
     * Returns a flat array of all tasks contained within this Project’s root Task. Tasks are sorted by their order in the database.
     */
get flattenedTasks() { return null; }

    /**
     * Returns true if this Project’s root Task has children, more efficiently than checking if children is empty.
     */
get hasChildren() { return null; }

    /**
     * The date on which the last review was performed. See also nextReviewDate.
     */
get lastReviewDate() { return null; }

    /**
     * The list of file URLs linked to this project’s root task. The files at these URLs are not present in the database, rather the database holds bookmarks leading to these files. These links can be read on iOS, but not written to.
     */
get linkedFileURLs() { return null; }

    /**
     * The name of the Projects root task.
     */
get name() { return null; }

    /**
     * The scheduled date for the next review. See also nextReviewDate.
     */
get nextReviewDate() { return null; }

    /**
     * Returns the very next task that can be completed in the project, or null if there is none or the project contains singleton actions.
     */
get nextTask() { return null; }

    /**
     * The Project’s root Task’s note.
     */
get note() { return null; }

    /**
     * The Project’s root Task’s note as a rich Text object.
     */
get noteText() { return null; }

    /**
     * An array of the notifications that are active for this project.
     */
get notifications() { return null; }

    /**
     * The Folder which contains this project.
     */
get parentFolder() { return null; }

    /**
     * The object holding the repetition properties for this project, or null if it is not repeating.
     */
get repetitionRule() { return null; }

    /**
     * The object holding the review repetition properties for this project. See also lastReviewDate andnextReviewDate`.
     */
get reviewInterval() { return null; }

    /**
     * If true, then children of this project form a dependency chain. For example, the first task blocks the second one until the first is completed.
     */
get sequential() { return null; }

    /**
     * When set, the dueDate and deferDate properties will use floating time zones. (Note: if a Project has no due or defer dates assigned, this property will revert to the database’s default setting.)
     */
get shouldUseFloatingTimeZone() { return null; }

    /**
     * The current status of the project as a whole. This does not reflect the status of individual tasks within the project root task – a project may be marked with the Done status and its individual tasks will be left with the completion state they had, in case the status is changed again to Active.
     */
get status() { return null; }

    /**
     * Returns the Tags associated with this Project.
     */
get tags() { return null; }

    /**
     * Returns the root task of the project, which holds the bulk of the project information, as well as being the container for tasks within the project. If you wish to copy the project or move it to a location that requires tasks, you would use this task as the object to be copied or moved.
     */
get task() { return null; }

    /**
     * Returns the current status of the project.
     */
get taskStatus() { return null; }

    /**
     * Returns all the tasks contained directly in this Project’s root Task, sorted by their library order.
     */
get tasks() { return null; }
}


/**
 * 
 */
class DateComponents {

    /**
     * 
     */
    constructor() { }

    /**
     * 
     */
get date() { return null; }

    /**
     * 
     */
get day() { return null; }

    /**
     * 
     */
get era() { return null; }

    /**
     * 
     */
get hour() { return null; }

    /**
     * 
     */
get minute() { return null; }

    /**
     * 
     */
get month() { return null; }

    /**
     * 
     */
get nanosecond() { return null; }

    /**
     * 
     */
get second() { return null; }

    /**
     * 
     */
get timeZone() { return null; }

    /**
     * 
     */
get year() { return null; }
}


/**
 * 
 */
class DateRange {

    /**
     * 
     */
get end() { return null; }

    /**
     * 
     */
get name() { return null; }

    /**
     * 
     */
get start() { return null; }
}


/**
 * The Decimal class provides support for operating on base–10 numbers, which may not be exactly representable by types like the built-in JavaScript Number class. Note that Decimal does not use the built-in arithmetic operations; for example, to add two Decimal instances, you must use the add() function.
 */
class Decimal {

    /**
     * Parses the given string into a Decimal. If the string cannot be parsed, notANumber is returned.
     * @param {String} string
     */
    static     fromString(string) { }

    /**
     * Returns the maximum representable Decimal value.
     */
    static get maximum() { return null; }

    /**
     * Returns the minimum representable Decimal value.
     */
    static get minimum() { return null; }

    /**
     * Returns a Decimal that represents a non-number value. Any arithmetic operations involving non-number values will return notANumber.
     */
    static get notANumber() { return null; }

    /**
     * Returns a Decimal representing one.
     */
    static get one() { return null; }

    /**
     * Returns a Decimal representing zero.
     */
    static get zero() { return null; }

    /**
     * Converts the Decimal to a String representation.
     */
    toString() { }

    /**
     * Generates a new Decimal by adding the argument and the receiver.
     * @param {Decimal} number
     */
    add(number) { }

    /**
     * Generates a new Decimal by subtracting the argument from the receiver.
     * @param {Decimal} number
     */
    subtract(number) { }

    /**
     * Generates a new Decimal by multiplying the argument and the receiver.
     * @param {Decimal} number
     */
    multiply(number) { }

    /**
     * Generates a new Decimal by dividing the receiver by the argument.
     * @param {Decimal} number
     */
    divide(number) { }

    /**
     * Compares the receiver and argument. If the receiver is less than the argument, –1 is returned. If the receiver is greater than the argument, 1 is returned. Otherwise, 0 is returned. notANumber is considered less than any valid number, and equal to itself.
     * @param {Decimal} number
     */
    compare(number) { }

    /**
     * Returns true if the receiver and argument represent the same number (or both are notANumber), and false otherwise.
     * @param {Decimal} number
     */
    equals(number) { }
}


/**
 * 
 */
const Device = {

    /**
     * The device the current application is running on.
     */
    current: function() { return null; }
    /**
     * A convenience that returns true on iPhone and iPad devices
     */
,
    iOS: function() { return null; }
    /**
     * A convenience that returns true only on iPad devices, but not on iPhone devices.
     */
,
    iPad: function() { return null; }
    /**
     * A convenience that returns true only on Mac devices.
     */
,
    mac: function() { return null; }
    /**
     * The current operation system version running on the device
     */
,
    operatingSystemVersion: function() { return null; }
    /**
     * The general type of the current device
     */
,
    type: function() { return null; }
    /**
     * A convenience that returns true only on Apple Vision Pro devices.
     */
,
    visionPro: function() { return null; }
};

globalThis.Device = Device;


/**
 * 
 */
class DeviceType {

    /**
     * 
     */
    static get all() { return null; }

    /**
     * An iPad
     */
    static get iPad() { return null; }

    /**
     * An iPhone
     */
    static get iPhone() { return null; }

    /**
     * A Mac device
     */
    static get mac() { return null; }

    /**
     * An Apple Vision Pro
     */
    static get visionPro() { return null; }
}


/**
 * 
 */
class Document {

    /**
     * Create a new document, which can be populated with data and then presented. On iOS, if the document is not presented by the time the resultFunction returns, it will be closed. On macOS, the document will be left around and accessible to the running script. resultFunction is executed before any functions tethered to the result Promise are executed. Returns a Promise that will yield the new document or an error.
     * @param {Function(document} resultFunction
     */
    static     makeNew(resultFunction) { }

    /**
     * Create a new document and presents it. Returns a Promise that will yield the new document or an error.
     * @param {Function(document} resultFunction
     */
    static     makeNewAndShow(resultFunction) { }

    /**
     * Close this document. If for some reason the document cannot be closed, the didCancel function may be called at some point in the future, with the original document as the single argument. For example, on the Mac the user may review unsaved changes and may cancel the close operation. If the document is closed, the didCancel function will not be called at all.
     * @param {Function(document} didCancel
     */
    close(didCancel) { }

    /**
     * Save this document.
     */
    save() { }

    /**
     * Deprecated: Please use makeFileWrapper() instead.
     *  Returns a new FileWrapper representing the contents of the document formatted as the specified type, or its current fileType if a null is passed for the type.
     * @param {String=} type
     */
    fileWrapper(type) { }

    /**
     * Generates a FileWrapper representing the contents of the document formatted as the specified type, or its current fileType if a null is passed for the type. Returns a Promise that will yield the file wrapper or an error. The returned file wrapper will have a name based off the given baseName and the default path extension for the requested file type.
     * @param {String} baseName
     * @param {String=} type
     */
    makeFileWrapper(baseName, type) { }

    /**
     * Undo the last done action.
     */
    undo() { }

    /**
     * Redo the last undone action.
     */
    redo() { }

    /**
     * Presents the document, ordering the window forward on macOS, and possibly closing the existing document and opening the new on on iOS. Calls the completion function once the document is shown.
     * @param {Function(} completed
     */
    show(completed) { }

    /**
     * Whether there are currently any actions that can be redone.
     */
get canRedo() { return null; }

    /**
     * Whether there are currently any actions that can be undone.
     */
get canUndo() { return null; }

    /**
     * The file type identifier the document uses when saving, if set.
     */
get fileType() { return null; }

    /**
     * Document name.
     */
get name() { return null; }

    /**
     * A list of all of the file types that this document can be written as.
     */
get writableTypes() { return null; }
}


/**
 * 
 */
class DatabaseDocument extends Document {

    /**
     * Returns a Promise that will yield either a newly created and displayed Window or an error. On macOS, this method respects the System Preference governing new window behavior (tab vs. window). That preference is accessible at System Preferences > Dock > Prefer tabs when opening documents.
     */
    newWindow() { }

    /**
     * Returns a Promise that will yield either a new tab adjacent to window or an error. This is not available on iOS.
     * @param {DocumentWindow} window
     */
    newTabOnWindow(window) { }

    /**
     * Returns a Promise that will yield either true indicating a successful sync, or an error.
     */
    sync() { }

    /**
     * 
     */
get windows() { return null; }
}


/**
 * A set of parameters for generating an email.
 */
class Email {

    /**
     * 
     */
    constructor() { }

    /**
     * Presents the generated email to the user for them to send (or discard). On iOS, any included attachment FileWrappers that are directories will be converted to Zip files.
     */
    generate() { }

    /**
     * 
     */
get blindCarbonCopy() { return null; }

    /**
     * 
     */
get body() { return null; }

    /**
     * 
     */
get carbonCopy() { return null; }

    /**
     * 
     */
get fileWrappers() { return null; }

    /**
     * 
     */
get receiver() { return null; }

    /**
     * 
     */
get subject() { return null; }
}


/**
 * A FilePicker allows the user to select URLs for files via the system-supplied file picking interface.
 */
class FilePicker {

    /**
     * Returns a new FilePicker with default settings.
     */
    constructor() { }

    /**
     * Presents the system file selection interface to the user, allowing them to choose one or more files of the given types. The returned Promise will yield the chosen URLs on success. If the user cancels chosing, the Promise will be rejected. Note that even when picking a single file or folder, the result will be an array of URLs.
     */
    show() { }

    /**
     * If true, then folders may be selected, but not files. In this case, types is ignored. Defaults to false.
     */
get folders() { return null; }

    /**
     * A message to display describing what files are being picked. This is currently only supported on macOS.
     */
get message() { return null; }

    /**
     * If true, then multiple files may be selected. Defaults to false.
     */
get multiple() { return null; }

    /**
     * The file types that will be allowed. If null, all file types will be allowed. Defaults to null.
     */
get types() { return null; }
}


/**
 * A FileSaver allows the user to save a FileWrapper to a URLs via the system-supplied file picking interface.
 */
class FileSaver {

    /**
     * Returns a new FileSaver with default settings.
     */
    constructor() { }

    /**
     * Presents the system file saving interface to the user, allowing them to choose a location and file name to save the file wrapper. The returned Promise will yield the chosen URL on success. If the user cancels chosing, the Promise will be rejected.
     * @param {FileWrapper} fileWrapper
     */
    show(fileWrapper) { }

    /**
     * A message to display describing what file is being saved. This is currently only supported on macOS.
     */
get message() { return null; }

    /**
     * The label shown next to the user-editable file name field. This is currently only supported on macOS.
     */
get nameLabel() { return null; }

    /**
     * The prompt shown on the the save button. This is currently only supported on macOS.
     */
get prompt() { return null; }

    /**
     * The file types that will be allowed. If null, all file types will be allowed. Defaults to null.
     */
get types() { return null; }
}


/**
 * 
 */
class FileWrapper {

    /**
     * Returns a new FileWrapper that represents a flat file containing the given data.
     * @param {String=} name
     * @param {Data} contents
     */
    static     withContents(name, contents) { }

    /**
     * Returns a new FileWrapper that represents a directory with the given child file wrappers. Each child file wrapper must have a unique name specified.
     * @param {String=} name
     * @param {Array.<FileWrapper>} children
     */
    static     withChildren(name, children) { }

    /**
     * Reads a FileWrapper from an existing URL.
     * @param {URL} url
     * @param {Array.<FileWrapper.ReadingOptions=>} options
     */
    static     fromURL(url, options) { }

    /**
     * Returns the child file wrapper with the specified name, or null if the receiver is not a directory or doesn’t have a child with that name.
     * @param {String} name
     */
    childNamed(name) { }

    /**
     * Returns the unique file name that will be used for the given child FileWrapper, or null if this file wrapper is not a child of the receiver.
     * @param {FileWrapper} child
     */
    filenameForChild(child) { }

    /**
     * Writes the FileWrapper to the given URL.
     *  NOTE: Any existing file or folder at the desination URL will be replaced. Care must be taken when developing scripts to avoid unintended data loss.
     * @param {URL} url
     * @param {Array.<FileWrapper.WritingOptions=>} options
     * @param {URL=} originalContentsURL
     */
    write(url, options, originalContentsURL) { }

    /**
     * Returns an Array of child FileWrappers, if this represents a directory. Otherwise, an empty array is returned.
     */
get children() { return null; }

    /**
     * Returns the regular file contents of the wrapper, if this represents a regular file. Otherwise, null is returned.
     */
get contents() { return null; }

    /**
     * Returns the destination if this represents a symbolic link. Otherwise, null is returned.
     */
get destination() { return null; }

    /**
     * Returns the actual file name that was last read for this file wrapper. Depending on the names of other sibling wrappers, this may not be what file name will be written.
     */
get filename() { return null; }

    /**
     * Returns the preferred file name that should be used when writing the file wrapper if no other file in the same parent directory wrapper is in use.
     */
get preferredFilename() { return null; }

    /**
     * Returns the type of this FileWrapper.
     */
get type() { return null; }
}


/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * A location specified relative to an existing Folder, Project, or Database. These cannot be instantiated directly, rather they are returned from properties like Folder.beginning, Project.before, or Database.ending.
 */

/**
 * 
 */

/**
 * An object representing one of the selectable days in the forecast perspective.
 */
class ForecastDay {

    /**
     * Determines whether or not badges on Forecast days include items that are not yet available.
     */
    static get badgeCountsIncludeDeferredItems() { return null; }

    /**
     * The status of the badge on this forecast day.
     */
    badgeKind() { }

    /**
     * The number of available tasks on this forecast day.
     */
get badgeCount() { return null; }

    /**
     * The date this forecast day represents. If this day’s kind is Past or DistantFuture the date returned will be years from the current time.
     */
get date() { return null; }

    /**
     * The number of remaining deferred tasks on this forecast day.
     */
get deferredCount() { return null; }

    /**
     * 
     */
get kind() { return null; }

    /**
     * 
     */
get name() { return null; }
}


/**
 * 
 */

/**
 * 
 */

/**
 * Form provides a mechanism to collect input from the user. Each form contains one or more instances of subclasses of Field, which are given a key. As the form is filled out, values object is populated with the values from the user interface.
 */
class Form {

    /**
     * 
     */
    constructor() { }

    /**
     * Adds the new Field to the Form, at the indicated position, or at the end if no position is specified. If the field has a default value, it will be added to the values result object immediately.
     * @param {Form.Field} field
     * @param {Number=} index
     */
    addField(field, index) { }

    /**
     * Removes the Field from theForm. Any entry in thevalues` for this field will be removed as well.
     * @param {Form.Field} field
     */
    removeField(field) { }

    /**
     * Present the Form to the user, and return a Promise to be fullfilled or rejected when the user commits or cancels the form.
     * @param {String} title
     * @param {String} confirmTitle
     */
    show(title, confirmTitle) { }

    /**
     * The current Field instances in the form, which will be visible to the user entering input.
     */
get fields() { return null; }

    /**
     * A function to check whether the entered values are acceptable. The form to validate is passed as the argument and the function is expected to return a boolean result or null to perform default validation. If an Error is thrown, it’s message will be displayed in the form as the reason for validation failure. Note that the validation function may add or remove fields and update entries in the values object (which will cause the interface to be updated). This is called any time the user edits values, or a field is added or removed. If no validate function is specified or it returns null, some per-field default validation will be performed (see Form.Field.Option. If the validate function returns a boolean result, no default validation will be performed.
     */
get validate() { return null; }

    /**
     * An object with the collected values for each field, stored under the key for that field.
     */
get values() { return null; }
}


/**
 * A single entry for a user input value in a Form. Each field can only be added to a single Form. This class cannot be constructed directly.
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * A field for text-based input, optionally using a Formatter to convert the string value into a different type.
 */

/**
 * A field for text-based input, optionally using a Formatter to convert the string value into a different type.
 */

/**
 * 
 */
class Formatter {
}


/**
 * 
 */

/**
 * This formatter class formats and parses Decimal-valued strings (note, not Number values).
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */
class Image {

    /**
     * Returns an image given a symbol name.
     * @param {String} name
     */
    static     symbolNamed(name) { }
}


/**
 * 
 */
class LigatureStyle {

    /**
     * Use all of the available ligatures.
     */
    static get All() { return null; }

    /**
     * Use ligatures that are required for proper rendering of text.
     */
    static get Essential() { return null; }

    /**
     * Use the default ligatures for the given script.
     */
    static get Standard() { return null; }

    /**
     * 
     */
    static get all() { return null; }
}


/**
 * 
 */
class Locale {

    /**
     * The list of known ISO locale identifiers.
     */
    static get identifiers() { return null; }

    /**
     * 
     * @param {String} identifier
     */
    constructor(identifier) { }

    /**
     * The calendar for the locale.
     */
get calendar() { return null; }

    /**
     * The currency code for the locale.
     */
get currencyCode() { return null; }

    /**
     * The ISO locale identifier for this object.
     */
get identifier() { return null; }
}


/**
 * 
 */
class MenuItem {

    /**
     * If true, a checkmark is displayed next to the MenuItem’s label.
     */
get checked() { return null; }

    /**
     * An optional image to be displayed with the MenuItem.
     */
get image() { return null; }

    /**
     * The string displayed to describe the MenuItem’s action.
     */
get label() { return null; }
}


/**
 * 
 */

/**
 * 
 */
class NamedStylePosition {
}


/**
 * 
 */
class Notification {

    /**
     * 
     * @param {String} title
     */
    constructor(title) { }

    /**
     * Attempts to present the notification and returns a Promise which will yield the notification object itself if it is clicked or tapped, or an error if it cannot be presented or is dismissed.
     */
    show() { }

    /**
     * 
     */
get subtitle() { return null; }

    /**
     * 
     */
get title() { return null; }
}


/**
 * A unique identifier referring to a DatabaseObject.
 */
class ObjectIdentifier {

    /**
     * Returns the constructor object that would be used for instances of the class for this ObjectIdentifier.
     */
get objectClass() { return null; }

    /**
     * Returns the primary key of the object identifier.
     */
get primaryKey() { return null; }
}


/**
 * A pasteboard temporarily holds representations of items of different types for transfer between different applications or different locations in the application.
 */
class Pasteboard {

    /**
     * Creates a new unique pasteboard.
     */
    static     makeUnique() { }

    /**
     * The Pasteboard used for user-initiated copy/paste support.
     */
    static get general() { return null; }

    /**
     * The first type from the provided list which is available on the pasteboard, or null if none are available.
     * @param {Array.<TypeIdentifier>} types
     */
    availableType(types) { }

    /**
     * Appends the new items to the pasteboard.
     * @param {Array.<Pasteboard.Item>} items
     */
    addItems(items) { }

    /**
     * Remove all items from the pasteboard.
     */
    clear() { }

    /**
     * The Data representation for the given type in this pasteboard, or null if none is available.
     * @param {TypeIdentifier} type
     */
    dataForType(type) { }

    /**
     * Set the Data representation for the given type in this pasteboard, replacing any previously set data.
     * @param {Data} data
     * @param {TypeIdentifier} type
     */
    setDataForType(data, type) { }

    /**
     * The String representation for the given type in this pasteboard, or null if none is available.
     * @param {TypeIdentifier} type
     */
    stringForType(type) { }

    /**
     * Set the String representation for the given type in this pasteboard, replacing any previously set data.
     * @param {String} string
     * @param {TypeIdentifier} type
     */
    setStringForType(string, type) { }

    /**
     * Gets or sets the pasteboard content as a single URL.
     */
get URL() { return null; }

    /**
     * Gets or sets the pasteboard content as a list of URLs.
     */
get URLs() { return null; }

    /**
     * Gets or sets the pasteboard content as a single color.
     */
get color() { return null; }

    /**
     * Gets or sets the pasteboard content as a list of colors.
     */
get colors() { return null; }

    /**
     * Returns true if the pasteboard contains one or more colors.
     */
get hasColors() { return null; }

    /**
     * Returns true if the pasteboard contains one or more images.
     */
get hasImages() { return null; }

    /**
     * Returns true if the pasteboard contains one or more strings.
     */
get hasStrings() { return null; }

    /**
     * Returns true if the pasteboard contains one or more URLs.
     */
get hasURLs() { return null; }

    /**
     * Gets or sets the pasteboard content as a single image.
     */
get image() { return null; }

    /**
     * Gets or sets the pasteboard content as a list of images.
     */
get images() { return null; }

    /**
     * The array of individual items on the pasteboard, each potentially with their own set of types.
     */
get items() { return null; }

    /**
     * Gets or sets the pasteboard content as a single plain-text string.
     */
get string() { return null; }

    /**
     * Gets or sets the pasteboard content as a list of plain-text strings.
     */
get strings() { return null; }

    /**
     * The list of pasteboard types currently available on the pasteboard.
     */
get types() { return null; }
}


/**
 * 
 */

/**
 * 
 */
class Perspective {

    /**
     * Returns all the built-in and custom perspectives, in their user-preferred order.
     */
    static get all() { return null; }

    /**
     * Returns the favorite perspectives.
     */
    static get favorites() { return null; }
}


/**
 * 
 */

/**
 * 
 */
class PlugIn {

    /**
     * 
     * @param {String} identifier
     * @param {Version=} minimumVersion
     */
    static     find(identifier, minimumVersion) { }

    /**
     * 
     */
    static get all() { return null; }

    /**
     * Looks for a PlugIn.Library in the receiver and returns it if found.
     * @param {String} identifier
     */
    library(identifier) { }

    /**
     * 
     * @param {String} identifier
     */
    action(identifier) { }

    /**
     * 
     * @param {String} identifier
     */
    handler(identifier) { }

    /**
     * 
     * @param {String} name
     */
    resourceNamed(name) { }

    /**
     * 
     * @param {String} name
     */
    imageNamed(name) { }

    /**
     * 
     * @param {String} filename
     */
    localizedResourceNamed(filename) { }

    /**
     * Returns the original URL from whence this PlugIn came, if known.
     */
get URL() { return null; }

    /**
     * 
     */
get actions() { return null; }

    /**
     * Returns the author for the PlugIn.
     */
get author() { return null; }

    /**
     * Returns the description provided for the PlugIn.
     */
get description() { return null; }

    /**
     * Returns the localized, human-readable name for the PlugIn.
     */
get displayName() { return null; }

    /**
     * 
     */
get handlers() { return null; }

    /**
     * The unique identifier of the PlugIn.
     */
get identifier() { return null; }

    /**
     * 
     */
get libraries() { return null; }

    /**
     * Returns the current Version for the PlugIn.
     */
get version() { return null; }
}


/**
 * 
 */

/**
 * 
 */

/**
 * An object that represents a library from a plug-in.
 */

/**
 * 
 */
class Preferences {

    /**
     * Creates a new Preferences instance. The identifier specified may be null to create an instance for the currently loading plug-in. If it is null and a plug-in is not being loaded, an error will be thrown. Key/value pairs stored in the instance will be prefixed with the identifier and a “.”.
     * @param {String=} identifier
     */
    constructor(identifier) { }

    /**
     * Returns the previously stored value for the given key, or null if no value is stored.
     * @param {String} key
     */
    read(key) { }

    /**
     * Returns the previously stored value as a Boolean, or false if there is no stored value or it can’t be converted to a Boolean.
     * @param {String} key
     */
    readBoolean(key) { }

    /**
     * Returns the previously stored value as a String, or null if there is no stored value or it is not a String.
     * @param {String} key
     */
    readString(key) { }

    /**
     * Returns the previously stored value as a Number, or null if there is no stored value or it is not a Number.
     * @param {String} key
     */
    readNumber(key) { }

    /**
     * Returns the previously stored value as a Date, or null if there is no stored value or it is not a Date.
     * @param {String} key
     */
    readDate(key) { }

    /**
     * Returns the previously stored value as a Data, or null if there is no stored value or it is not a Data.
     * @param {String} key
     */
    readData(key) { }

    /**
     * Stores the specified key/value pair, or removes the pair if value is null.
     * @param {String} key
     * @param {Boolean} value
     * @param {*} String
     * @param {*} Number
     * @param {*} Date
     * @param {*} or_Data_or_null
     */
    write(key, value, String, Number, Date, or_Data_or_null) { }

    /**
     * Removes and previously stored value for the given key.
     * @param {String} key
     */
    remove(key) { }

    /**
     * The scoping identifier the instance given when created, or the plug-in identifier if none was given.
     */
get identifier() { return null; }
}


/**
 * Project.ReviewInterval is a value object which represents a simple repetition interval. Because it’s a value object rather than a proxy, changing its properties doesn’t affect any projects directly. To change a project’s review interval, update the value and assign it back to the project’s reviewInterval property:
 */

/**
 * 
 */

/**
 * 
 */
class QuickOpenScriptAction {

    /**
     * An optional image to be displayed with the MenuItem.
     */
get image() { return null; }

    /**
     * The string displayed to describe the MenuItem’s action.
     */
get label() { return null; }
}


/**
 * An object representing the current selection in a Window.
 */
class Selection {

    /**
     * Returns all the objects in the selection.
     */
get allObjects() { return null; }

    /**
     * Returns the Database object in the selection, if any.
     */
get database() { return null; }

    /**
     * Returns all the DatabaseObject objects in the selection, if any.
     */
get databaseObjects() { return null; }

    /**
     * The Document containing the selection.
     */
get document() { return null; }

    /**
     * Returns all the Folder objects in the selection, if any.
     */
get folders() { return null; }

    /**
     * Returns all the Project objects in the selection, if any.
     */
get projects() { return null; }

    /**
     * Returns all the Tag objects in the selection, if any.
     */
get tags() { return null; }

    /**
     * Returns all the Task objects in the selection, if any.
     */
get tasks() { return null; }

    /**
     * The Window containing the selection.
     */
get window() { return null; }
}


/**
 * Settings represent the database synchronized configuration values. NOTE: editing these should be done with care, as storing invalid values may corrupt your database or produce instability in the various client applications.
 */
class Settings {

    /**
     * 
     * @param {String} key
     */
    defaultObjectForKey(key) { }

    /**
     * 
     * @param {String} key
     */
    hasNonDefaultObjectForKey(key) { }

    /**
     * 
     * @param {String} key
     */
    objectForKey(key) { }

    /**
     * 
     * @param {Object=} value
     * @param {String} key
     */
    setObjectForKey(value, key) { }

    /**
     * 
     * @param {String} key
     */
    boolForKey(key) { }

    /**
     * 
     * @param {Boolean} value
     * @param {String} key
     */
    setBoolForKey(value, key) { }

    /**
     * 
     * @param {String} key
     */
    integerForKey(key) { }

    /**
     * 
     * @param {Number} value
     * @param {String} key
     */
    setIntegerForKey(value, key) { }

    /**
     * 
     */
get keys() { return null; }
}


/**
 * An interface that can display the system share interaction for the given items.
 */
class SharePanel {

    /**
     * Create a new share panel with the given items.
     * @param {Array.<URL>} items
     * @param {*} String
     * @param {*} Image
     * @param {*} or_FileWrapper
     */
    constructor(items, String, Image, or_FileWrapper) { }

    /**
     * Appends the item to the end of items.
     * @param {URL} shareItem
     * @param {*} String
     * @param {*} Image
     * @param {*} or_FileWrapper
     */
    addItem(shareItem, String, Image, or_FileWrapper) { }

    /**
     * Appends the contents of the given array to the end of items.
     * @param {Array.<URL>} shareItems
     * @param {*} String
     * @param {*} Image
     * @param {*} or_FileWrapper
     */
    addItems(shareItems, String, Image, or_FileWrapper) { }

    /**
     * Removes the first occurrence of the item from items if it is present in items.
     * @param {URL} shareItem
     * @param {*} String
     * @param {*} Image
     * @param {*} or_FileWrapper
     */
    removeItem(shareItem, String, Image, or_FileWrapper) { }

    /**
     * Removes the first occurrence of each member of the given array from items if that member is present in items.
     * @param {Array.<URL>} shareItems
     * @param {*} String
     * @param {*} Image
     * @param {*} or_FileWrapper
     */
    removeItems(shareItems, String, Image, or_FileWrapper) { }

    /**
     * Sets items to an empty array. Note: Calling show when items is empty results in an error, so be sure to add new items after calling this and before calling show.
     */
    clearItems() { }

    /**
     * Presents the share panel for its items. Calling this when items is empty will result in an error.
     */
    show() { }

    /**
     * The items that will be supplied to the system share interaction upon calling show.
     */
get items() { return null; }
}


/**
 * 
 */
class Speech {
}


/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */
class StringEncoding {

    /**
     * 
     */
    static get ASCII() { return null; }

    /**
     * 
     */
    static get ISO2022JP() { return null; }

    /**
     * 
     */
    static get ISOLatin1() { return null; }

    /**
     * 
     */
    static get ISOLatin2() { return null; }

    /**
     * 
     */
    static get JapaneseEUC() { return null; }

    /**
     * 
     */
    static get MacOSRoman() { return null; }

    /**
     * 
     */
    static get NextStep() { return null; }

    /**
     * 
     */
    static get NonLossyASCII() { return null; }

    /**
     * 
     */
    static get ShiftJIS() { return null; }

    /**
     * 
     */
    static get Symbol() { return null; }

    /**
     * 
     */
    static get UTF16() { return null; }

    /**
     * 
     */
    static get UTF16BigEndian() { return null; }

    /**
     * 
     */
    static get UTF16LittleEndian() { return null; }

    /**
     * 
     */
    static get UTF32() { return null; }

    /**
     * 
     */
    static get UTF32BigEndian() { return null; }

    /**
     * 
     */
    static get UTF32LittleEndian() { return null; }

    /**
     * 
     */
    static get UTF8() { return null; }

    /**
     * 
     */
    static get Unicode() { return null; }

    /**
     * 
     */
    static get WindowsCP1250() { return null; }

    /**
     * 
     */
    static get WindowsCP1251() { return null; }

    /**
     * 
     */
    static get WindowsCP1252() { return null; }

    /**
     * 
     */
    static get WindowsCP1253() { return null; }

    /**
     * 
     */
    static get WindowsCP1254() { return null; }

    /**
     * 
     */
    static get all() { return null; }
}


/**
 * 
 */
class Style {

    /**
     * Sets (or clears) the value for the given style attribute.
     *  Styles that cascade from this one will inherit this value, if they don’t define their own value or have a closer ancestor style that does.
     *  Returns true if a change was actually made, false otherwise. Throws an error if the key does not map to a known attribute, or if the value is of the wrong type for the specified attribute.
     * @param {Style.Attribute} attribute
     * @param {Object=} value
     */
    set(attribute, value) { }

    /**
     * Looks up the value for the specified style attribute locally, in the cascading and inherited styles, and finally falling back to the default value for the style attribute.
     * @param {Style.Attribute} attribute
     */
    get(attribute) { }

    /**
     * Looks up the value for the specified style attribute locally, returning null if it is not set.
     * @param {Style.Attribute} attribute
     */
    localValueForAttribute(attribute) { }

    /**
     * Adds the specified NamedStyle to the set of named styles to include in this Style. If the style is already present, or if this would create a loop (adding two NamedStyles to each other’s list of named styles), an error will be thrown.
     * @param {NamedStyle} namedStyle
     */
    addNamedStyle(namedStyle) { }

    /**
     * Removes the specified NamedStyle from the set of named styles to include in this Style. If the style is not present, an error will be thrown.
     * @param {NamedStyle} namedStyle
     */
    removeNamedStyle(namedStyle) { }

    /**
     * Returns true if the receiver is influenced, directly or indirectly from the passed Style.
     * @param {Style} otherStyle
     */
    influencedBy(otherStyle) { }

    /**
     * Updates all the attributes and inherited styles on the receiver to be the same as the argument Style.
     * @param {Style} style
     */
    setStyle(style) { }

    /**
     * Removes all the locally applied style attribute values for this Style.
     */
    clear() { }

    /**
     * The color used to fill text. Setting the color to null will remove the setting for this style.
     */
get fontFillColor() { return null; }

    /**
     * Returns the URL link for a style, or null if there is no link applied. Note that get(Style.Attribute.Link) on the same style will return the default URL with an empty toString() value when there is no URL applied. If the style represents a file attachment and there is no specific link attribute set, the URL for the file attachment will be returned. If the style represents an file attachment that is embedded in the document, null will be returned.
     */
get link() { return null; }

    /**
     * Returns an array of the Style.Attributes defined on this Style.
     */
get locallyDefinedAttributes() { return null; }

    /**
     * Returns the NamedStyles that are directly associated with this Style. If a style attribute lookup doesn’t find a value in the local style, then the named styles will be searched.
     */
get namedStyles() { return null; }
}


/**
 * 
 */
class NamedStyle extends Style {

    /**
     * Removes the NamedStyle from the document. Any references to it are disconnected as well.
     */
    remove() { }

    /**
     * Returns a NamedStylePosition that indicates the slot after this item.
     */
get after() { return null; }

    /**
     * Returns a NamedStylePosition that indicates the slot before this item.
     */
get before() { return null; }

    /**
     * A unique identifier for the style, which is suitable for long-lived references.
     */
get identifier() { return null; }

    /**
     * The name of the style that is presented in the interface.
     */
get name() { return null; }
}


/**
 * 
 */

/**
 * A location specified relative to an existing Tag or Database. These cannot be instantiated directly, rather they are returned from properties like Tag.before or Database.beginning.
 */

/**
 * 
 */

/**
 * A location specifying the order of a Task within a Tag. These cannot be instantiated directly, rather they are returned from properties like Tag.beforeTask() or Tag.endingOfTasks. (For a complete list of locations, open the navigation sidebar and use its filter to search for Tag.TaskInsertionLocation.)
 */

/**
 * A location specified relative to an existing Task or Database. These cannot be instantiated directly, rather they are returned from properties like Task.before, Inbox.ending, or Project.beginning. (For a complete list of locations, open the navigation sidebar and use its filter to search for Task.ChildInsertionLocation.)
 */

/**
 * 
 */

/**
 * 
 */

/**
 * A Task.RepetitionRule describes a pattern of dates using a ICS formatted recurrence string and a Task.RepetitionMethod to describe how those dates are applied to a Task.
 */

/**
 * 
 */

/**
 * A location specifying the order of a Tag within a Task. These cannot be instantiated directly, rather they are returned from properties like Task.beforeTag() or Task.endingOfTags. (For a complete list of locations, open the navigation sidebar and use its filter to search for Task.TagInsertionLocation.)
 */

/**
 * 
 */
class Text {

    /**
     * Returns a new Text instance that represents a file attachment. The attachment has a single character string content with a special value.
     * @param {FileWrapper} fileWrapper
     * @param {Style} style
     */
    static     makeFileAttachment(fileWrapper, style) { }

    /**
     * Returns a new Text instance with the given string contents and Style applied to the entire range of text.
     * @param {String} string
     * @param {Style} style
     */
    constructor(string, style) { }

    /**
     * Returns a copy of the text in the specified range.
     * @param {Text.Range} range
     */
    textInRange(range) { }

    /**
     * Returns a Style instance for the given range of the Text.
     * @param {Text.Range} range
     */
    styleForRange(range) { }

    /**
     * Returns an array of TextRanges for the specified component. If useEnclosingRange is true, than any extra characters that separate follow a component will be included in its range. Any extra characters before the first found component will be included in the first range.
     * @param {TextComponent} component
     * @param {Boolean=} useEnclosingRange
     */
    ranges(component, useEnclosingRange) { }

    /**
     * Replaces the sub-range of the receiving Text with a copy of the passed in Text (which remains unchanged).
     * @param {Text.Range} range
     * @param {Text} withValue
     */
    replace(range, withValue) { }

    /**
     * Appends the given Text to the receiver.
     * @param {Text} text
     */
    append(text) { }

    /**
     * Inserts a copy of the given Text at the specified position in the receiver.
     * @param {Text.Position} position
     * @param {Text} text
     */
    insert(position, text) { }

    /**
     * Removes the indicated sub-range of the receiving Text.
     * @param {Text.Range} range
     */
    remove(range) { }

    /**
     * Finds an occurrence of string within the Text and returns the enclosing Text.Range if there is a match. If range is passed, only that portion of the Text is searched. The supplied options, if any, change how the search is performed based on their definition.
     * @param {String} string
     * @param {Array.<Text.FindOption=>} options
     * @param {Text.Range=} range
     */
    find(string, options, range) { }

    /**
     * Returns an array of copies of the blocks of Text in the receiver that represent Attachments. Note that editing these instances will not change the original.
     */
get attachments() { return null; }

    /**
     * Returns an array of copies of the contiguous blocks of Text in the receiver that have the same style. Note that editing these instances will not change the original.
     */
get attributeRuns() { return null; }

    /**
     * Returns an array of copies of the characters in the Text. Note that editing these instances will not change the original.
     */
get characters() { return null; }

    /**
     * Returns a Text.Position indicating the end of the Text.
     */
get end() { return null; }

    /**
     * Returns the attached file wrapper for the Text (or rather, the first character of the text), if any.
     */
get fileWrapper() { return null; }

    /**
     * Returns an array of copies of the paragraphs in the Text. Note that editing these instances will not change the original. Paragraphs, if ended by a newline, will contain the newline character.
     */
get paragraphs() { return null; }

    /**
     * Returns a Text.Range that spans the entire Text.
     */
get range() { return null; }

    /**
     * Returns an array of copies of the sentences in the Text. Note that editing these instances will not change the original.
     */
get sentences() { return null; }

    /**
     * Returns a Text.Position indicating the beginning of the Text.
     */
get start() { return null; }

    /**
     * Returns a plain String version of the characters in the Text. Note that since JavaScript represents Strings as Unicode code points, the length of the returned string may be different from the number of characters in the Text object.
     */
get string() { return null; }

    /**
     * Returns a Style instance for this Text object.
     */
get style() { return null; }

    /**
     * Returns an array of copies of the words in the Text. Note that editing these instances will not change the original.
     */
get words() { return null; }
}


/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */
class TextAlignment {

    /**
     * Visually center aligned.
     */
    static get Center() { return null; }

    /**
     * Fully-justified.
     */
    static get Justified() { return null; }

    /**
     * Visually left aligned.
     */
    static get Left() { return null; }

    /**
     * Use the default alignment based on the characters in the text.
     */
    static get Natural() { return null; }

    /**
     * Visually right aligned.
     */
    static get Right() { return null; }

    /**
     * 
     */
    static get all() { return null; }
}


/**
 * 
 */
class TextComponent {

    /**
     * The ranges of Text which represent Attachments.
     */
    static get Attachments() { return null; }

    /**
     * The ranges of Text which have the same attributes.
     */
    static get AttributeRuns() { return null; }

    /**
     * The individual characters of the Text. Note that some characters (like emoji) consist of multiple Unicode code points.
     */
    static get Characters() { return null; }

    /**
     * The paragraphs of Text. Unlike other options, the line breaking characters that end the paragraph are included.
     */
    static get Paragraphs() { return null; }

    /**
     * The sentences of the Text.
     */
    static get Sentences() { return null; }

    /**
     * The words in the Text. Whitespace or other word break characters are not included.
     */
    static get Words() { return null; }

    /**
     * 
     */
    static get all() { return null; }
}


/**
 * 
 */
class TimeZone {

    /**
     * The list of known time zone abbreviations.
     */
    static get abbreviations() { return null; }

    /**
     * Make a new TimeZone with the given abbreviation. Note that the returned TimeZone may have a different abbreviation than the passed argument. For example, if one of “PST” or “PDT” is requested that doens’t match the current use of daylight savings time, the one that does match will be returned.
     * @param {String} abbreviation
     */
    constructor(abbreviation) { }

    /**
     * The abbreviation for the TimeZone.
     */
get abbreviation() { return null; }

    /**
     * Returns true if the TimeZone is currently using daylight savings time.
     */
get daylightSavingTime() { return null; }

    /**
     * The current difference in seconds between this TimeZone and GMT.
     */
get secondsFromGMT() { return null; }
}


/**
 * 
 */
class Timer {

    /**
     * Makes a new Timer that will fire once, after the specified interval (in seconds from the current time). When the Timer fires, the passed in Function is called, passing the Timer as its argument.
     * @param {Number} interval
     * @param {Function(timer} action
     */
    static     once(interval, action) { }

    /**
     * Makes a new Timer that will fire repeatedly with the specified interval (in seconds, with the first invocation happening that interval after the current time). When the Timer fires, the passed in Function is called, passing the Timer as its argument.
     * @param {Number} interval
     * @param {Function(timer} action
     */
    static     repeating(interval, action) { }

    /**
     * 
     */
    cancel() { }

    /**
     * 
     */
get interval() { return null; }
}


/**
 * 
 */
class ToolbarItem {

    /**
     * 
     */
get image() { return null; }

    /**
     * 
     */
get label() { return null; }

    /**
     * 
     */
get toolTip() { return null; }
}


/**
 * 
 */
class Tree {

    /**
     * Returns the TreeNode that represents the object in this Tree, or null if it cannot be found (possibly filtered out).
     * @param {Object} object
     */
    nodeForObject(object) { }

    /**
     * Returns an array of TreeNodes for the objects that are currently in the Tree, according to the same filters as nodeForObject(). The size of the resulting node array may be smaller (even empty) than the passed in objects array.
     * @param {Array.<Object>} object
     */
    nodesForObjects(object) { }

    /**
     * Ensures the ancestor nodes of all the specified nodes are expanded.
     * @param {Array.<TreeNode>} nodes
     */
    reveal(nodes) { }

    /**
     * Selects the specified TreeNodes that are visible (nodes with collapsed ancestors cannot be selected). If extending is true, the existing selection is not cleared.
     * @param {Array.<TreeNode>} nodes
     * @param {Boolean=} extending
     */
    select(nodes, extending) { }

    /**
     * Writes a serialized version of the nodes to the specified pasteboard.
     * @param {Array.<TreeNode>} nodes
     * @param {Pasteboard} to
     */
    copyNodes(nodes, to) { }

    /**
     * Attempts to read a serialized version of nodes from the pasteboard and create new items at the specified location in the receiver. If a parent node is not specified, then the root node of the receiver is assumed. If a childIndex is not specified, any new children are placed at the end of the parent’s existing children.
     * @param {Pasteboard} from
     * @param {TreeNode=} parentNode
     * @param {Number=} childIndex
     */
    paste(from, parentNode, childIndex) { }

    /**
     * Returns the rootNode of the Editor.
     */
get rootNode() { return null; }

    /**
     * Returns the list of selected TreeNodes, in the order they appear in the tree.
     */
get selectedNodes() { return null; }
}


/**
 * 
 */
class ContentTree extends Tree {
}


/**
 * The root object of a tree in the sidebar.
 */
class SidebarTree extends Tree {
}


/**
 * 
 */
class TreeNode {

    /**
     * Returns the child node at the given index.
     * @param {Number} childIndex
     */
    childAtIndex(childIndex) { }

    /**
     * Attempts to expand the TreeNode. If completely is passed, all the child nodes will be expanded as they allow.
     * @param {Boolean=} completely
     */
    expand(completely) { }

    /**
     * Attempts to collapse the TreeNode. If completely is passed, all the child nodes will be collapse as they allow.
     * @param {Boolean=} completely
     */
    collapse(completely) { }

    /**
     * Attempts to expand the inline note of the TreeNode. If completely is passed, all the child node notes will be expanded.
     * @param {Boolean=} completely
     */
    expandNote(completely) { }

    /**
     * Attempts to collapse the inline note of the TreeNode. If completely is passed, all the child node notes will be collapsed.
     * @param {Boolean=} completely
     */
    collapseNote(completely) { }

    /**
     * Expands all the
     */
    reveal() { }

    /**
     * Calls the supplied function for each TreeNode in the receiver (including the receiver), passing that node as the single argument. The supplied function can optionally return a ApplyResult to skip enumeration of some elements.
     * @param {Function(node} fn
     */
    apply(fn) { }

    /**
     * Returns true if this TreeNode can be collapsed.
     */
get canCollapse() { return null; }

    /**
     * Returns true if this TreeNode can be expanded.
     */
get canExpand() { return null; }

    /**
     * Returns the number of children directly under this node.
     */
get childCount() { return null; }

    /**
     * Returns the array of children that are visible under this node, according to any filtering that is being done, and in the order specified by any sorting rules that have been established.
     */
get children() { return null; }

    /**
     * Returns the index of this TreeNode among its siblings, or zero for the rootNode.
     */
get index() { return null; }

    /**
     * Returns true if this TreeNode is currently expanded.
     */
get isExpanded() { return null; }

    /**
     * Returns true if the note of this TreeNode is currently expanded.
     */
get isNoteExpanded() { return null; }

    /**
     * Returns true if the TreeNode is the rootNode or all of its ancestor nodes are expanded.
     */
get isRevealed() { return null; }

    /**
     * Returns true if this node is the rootNode of its tree.
     */
get isRootNode() { return null; }

    /**
     * Returns true if this TreeNode can be selected. The rootNode cannot be selected, nor can nodes that aren’t revealed.
     */
get isSelectable() { return null; }

    /**
     * Set to true if this TreeNode is in the list of selected nodes for its tree. Attempting to set this to true will do nothing if the node is not revealed (or is the root node).
     */
get isSelected() { return null; }

    /**
     * Returns the nesting level of the TreeNode, relative to the root of the tree. The rootNode of an Outline has level zero, its children have level one, and so on. Note that if only a portion of the model is being shown, this level may not match the level of the underlying object.
     */
get level() { return null; }

    /**
     * The model object which this node wraps.
     */
get object() { return null; }

    /**
     * Returns the TreeNode that contains this node, or null if this is the rootNode.
     */
get parent() { return null; }

    /**
     * Returns the root TreeNode for the tree that this node belongs to.
     */
get rootNode() { return null; }
}


/**
 * 
 */
class TypeIdentifier {

    /**
     * Return a TypeIdentifier that matches items that have the given path extension and are (or are not) directories.
     * @param {String} pathExtension
     * @param {Boolean} isDirectory
     */
    static     fromPathExtension(pathExtension, isDirectory) { }

    /**
     * The URL type.
     */
    static get URL() { return null; }

    /**
     * The binary property list type.
     */
    static get binaryPropertyList() { return null; }

    /**
     * The comma-separated text type.
     */
    static get csv() { return null; }

    /**
     * The list of TypeIdentifiers that can be read and written natively by documents in this application.
     */
    static get editableTypes() { return null; }

    /**
     * The GIF image type.
     */
    static get gif() { return null; }

    /**
     * A generic type that all image types conform to.
     */
    static get image() { return null; }

    /**
     * The JPEG image type.
     */
    static get jpeg() { return null; }

    /**
     * The JSON type.
     */
    static get json() { return null; }

    /**
     * The OmniFocus document file type.
     */
    static get ofocus() { return null; }

    /**
     * The PDF type.
     */
    static get pdf() { return null; }

    /**
     * The plain text type.
     */
    static get plainText() { return null; }

    /**
     * The PNG image type.
     */
    static get png() { return null; }

    /**
     * The generic property list type.
     */
    static get propertyList() { return null; }

    /**
     * The list of TypeIdentifiers that can be read by documents in this this application.
     */
    static get readableTypes() { return null; }

    /**
     * The RTF type.
     */
    static get rtf() { return null; }

    /**
     * The RTFD type.
     */
    static get rtfd() { return null; }

    /**
     * The TaskPaper-formatted tasks pasteboard type.
     */
    static get taskPaper() { return null; }

    /**
     * The pasteboard type identifier for OmniFocus tasks and projects.
     */
    static get tasks() { return null; }

    /**
     * The pasteboard type identifier for OmniFocus tasks, projects, and folders.
     */
    static get tasksAndFolders() { return null; }

    /**
     * The TIFF image type.
     */
    static get tiff() { return null; }

    /**
     * The list of TypeIdentifiers that can be written by documents in this application (though some documents may be exportable only in a subset of these types).
     */
    static get writableTypes() { return null; }

    /**
     * The XML property list type.
     */
    static get xmlPropertyList() { return null; }

    /**
     * Returns a new TypeIdentifier with the given identifier.
     * @param {String} identifier
     */
    constructor(identifier) { }

    /**
     * Returns true if the instance is the same as the given argument or a more specific type. For example, TypeIdentifier.png.conformsTo(TypeIdentifier.image) will be true, but TypeIdentifier.png.conformsTo(TypeIdentifier.plainText) will be false.
     * @param {TypeIdentifier} other
     */
    conformsTo(other) { }

    /**
     * Returns a human-readable description of the type.
     */
get displayName() { return null; }

    /**
     * Returns a unique string for a type identifier, suitable for archiving or encoding in scripts.
     */
get identifier() { return null; }

    /**
     * The list of filesystem path extensions used by this type.
     */
get pathExtensions() { return null; }
}


/**
 * 
 */
class URL {

    /**
     * Deprecated: Please use FilePicker instead.
     * @param {Array.<String>} types
     */
    static     choose(types) { }

    /**
     * Deprecated: Please use FilePicker instead.
     */
    static     chooseFolder() { }

    /**
     * Parses the string as a URL if possible and returns a new instance, or null if the string is not a valid URL. If baseURL is not null, the result is a relative URL.
     * @param {String} string
     * @param {URL=} relativeToURL
     */
    static     fromString(string, relativeToURL) { }

    /**
     * Returns a new file URL with the given path and assumption of whether it is a directory.
     * @param {String} path
     * @param {Boolean} isDirectory
     * @param {URL=} relativeToURL
     */
    static     fromPath(path, isDirectory, relativeToURL) { }

    /**
     * Creates a URL to invoke the given JS on the given app (url scheme) appropriate for use with the call function.
     * @param {String} app
     * @param {String} js
     * @param {Object=} arg
     */
    static     tellScript(app, js, arg) { }

    /**
     * Creates a URL to invoke the given JS function on the given app (url scheme) appropriate for use with the call function.
     * @param {String} app
     * @param {Function} jsFunction
     * @param {Object=} arg
     */
    static     tellFunction(app, jsFunction, arg) { }

    /**
     * Returns the URL scheme for the current app.
     */
    static get currentAppScheme() { return null; }

    /**
     * Returns the application’s Documents directory. This is in the application’s sandbox, and on the Mac is not the user’s Documents directory. This is accessible by the application without using access().
     */
    static get documentsDirectory() { return null; }

    /**
     * Get the contents at the destination of this URL.
     * @param {Function(contents} success
     */
    fetch(success) { }

    /**
     * Invoke an x-callback-url API end-point, with the callback functions being invoked when a reply is received. When a reply is received, the parameters of that URL are decoded as JSON, or left as String values if not valid JSON, and stored as properties of a result object. For a successful reply, if the result object has one property, its value is passed as the first argument to the success function. If there are zero or more than one parameters, the full object is passed as the first argument. In both cases, the success function is passed a second argument that is the full object of parameters. The failure callback is always passed the object will all the result parameters, typically errorCode and errorMessage.
     * @param {Function} success
     * @param {Function=} failure
     */
    call(success, failure) { }

    /**
     * Ask the system to open this URL.
     */
    open() { }

    /**
     * Scan a directory URL for files of the given types. If recurse is specified and is false, only the immediate contents of the directory will be considered. If recurse is not specified or is true, the full directory tree will be scanned.
     * @param {Array.<TypeIdentifier>} types
     * @param {Boolean=} recurse
     */
    find(types, recurse) { }

    /**
     * 
     */
    toString() { }

    /**
     * Return a new URL with the given string added at the end of the path.
     * @param {String} component
     */
    appendingPathComponent(component) { }

    /**
     * Returns a new URL with the last path component having the given path extension added, including a separating “.”
     * @param {String} pathExtension
     */
    appendingPathExtension(pathExtension) { }

    /**
     * Returns a new URL with the path extension (if any) of the last path component removed.
     */
    deletingPathExtension() { }

    /**
     * Returns a new URL with the last path component removed.
     */
    deletingLastPathComponent() { }

    /**
     * Returns the absolute string for the URL.
     */
get absoluteString() { return null; }

    /**
     * Returns the absolute URL.
     */
get absoluteURL() { return null; }

    /**
     * Returns the base URL if this URL is relative, or null if it is absolute.
     */
get baseURL() { return null; }

    /**
     * Returns the fragment component of the URL, or null.
     */
get fragment() { return null; }

    /**
     * Returns true if the URL’s path represents a directory.
     */
get hasDirectoryPath() { return null; }

    /**
     * Returns the host component of the URL or null.
     */
get host() { return null; }

    /**
     * Returns true if the scheme is file:.
     */
get isFileURL() { return null; }

    /**
     * Returns the last component of the URL’s path or an empty string.
     */
get lastPathComponent() { return null; }

    /**
     * Returns the password component of the URL or null.
     */
get password() { return null; }

    /**
     * Returns the path component of the URL or null.
     */
get path() { return null; }

    /**
     * Returns the path of the URL as an array of components.
     */
get pathComponents() { return null; }

    /**
     * Returns the path extension of the last path component of the URL or the empty string.
     */
get pathExtension() { return null; }

    /**
     * Returns the port component of the URL or null.
     */
get port() { return null; }

    /**
     * Returns the query component of the URL or null.
     */
get query() { return null; }

    /**
     * Returns the relative path of the URL, or the absolute path if this URL is not relative
     */
get relativePath() { return null; }

    /**
     * Returns the relative portion of the URL if it is relative, otherwise this returns the absolute string.
     */
get relativeString() { return null; }

    /**
     * Returns the scheme of the URL.
     */
get scheme() { return null; }

    /**
     * String absoluteString representation of this URL.
     */
get string() { return null; }

    /**
     * Returns the user component of the URL or null.
     */
get user() { return null; }
}


/**
 * A URL.Access holds the temporary access given by the URL.Bookmark.access() function. These should not be stored longer than needed.
 */

/**
 * A URL.Bookmark records the permission to access a given URL and will restore that permission, as well as a possibly renamed file, at a later point.
 */

/**
 * URL.Components allows for correct generation and interpreation of URL instances, dealing with the specific different quoting rules for each specific part of the URL.
 */

/**
 * URL.FetchRequest represents a request for a URL resource, providing additional controls for the request (such as the HTTP method, headers, and cache controls) and uses a Promise-based API for actually performing the request and receiving a detailed response (which includes the HTTP status code and headers along with the body of the result—see URL.FetchResponse for more detail).
 */

/**
 * URL.FetchResponse represents the response from fetching a URL resource, providing additional information about the response such as the HTTP status code and headers along with the actual data for that response. This is a read-only object returned by performing a URL.FetchRequest; see that class for more details on actually performing the request.
 */

/**
 * 
 */

/**
 * 
 */
class UnderlineAffinity {

    /**
     * Underline only the words, but not the space between them.
     */
    static get ByWord() { return null; }

    /**
     * Underline the entire range.
     */
    static get None() { return null; }

    /**
     * 
     */
    static get all() { return null; }
}


/**
 * 
 */
class UnderlinePattern {

    /**
     * Dashed line.
     */
    static get Dash() { return null; }

    /**
     * Alternating dashes and dots.
     */
    static get DashDot() { return null; }

    /**
     * Alternating dashes and pairs of dots.
     */
    static get DashDotDot() { return null; }

    /**
     * Dotted line.
     */
    static get Dot() { return null; }

    /**
     * A continuous line.
     */
    static get Solid() { return null; }

    /**
     * 
     */
    static get all() { return null; }
}


/**
 * 
 */
class UnderlineStyle {

    /**
     * Two lines.
     */
    static get Double() { return null; }

    /**
     * No underline.
     */
    static get None() { return null; }

    /**
     * A single line.
     */
    static get Single() { return null; }

    /**
     * A single thick line.
     */
    static get Thick() { return null; }

    /**
     * 
     */
    static get all() { return null; }
}


/**
 * 
 */
class Version {

    /**
     * Parses a string representation of a Version and returns an instance, or throws an error if the string isn’t a valid version.
     * @param {String} versionString
     */
    constructor(versionString) { }

    /**
     * Returns true if the receiving Version is equal to the argument Version.
     * @param {Version} version
     */
    equals(version) { }

    /**
     * Returns true if the receiving Version is at the same as or newer than the argument Version.
     * @param {Version} version
     */
    atLeast(version) { }

    /**
     * Returns true if the receiving Version is strictly after the argument Version.
     * @param {Version} version
     */
    isAfter(version) { }

    /**
     * Returns true if the receiving Version is strictly before the argument Version.
     * @param {Version} version
     */
    isBefore(version) { }

    /**
     * Returns as an opaque string representation of the Version, suitable for display or logging. This should never be used in comparisons of any sort.
     */
get versionString() { return null; }
}


/**
 * 
 */
class Window {

    /**
     * 
     */
    close() { }
}


/**
 * 
 */
class DocumentWindow extends Window {

    /**
     * Clears the current selection and then selects the given objects in the content area, if present in the current perspective of this window.
     * @param {Array.<DatabaseObject>} objects
     */
    selectObjects(objects) { }

    /**
     * Returns a ForecastDay object that encompasses date. This will throw an error if Forecast is not the current perspective in this window.
     * @param {Date} date
     */
    forecastDayForDate(date) { }

    /**
     * Selects the days in the Forecast picker represented by days. This will throw an error if Forecast is not the current perspective in this window.
     * @param {Array.<ForecastDay>} days
     */
    selectForecastDays(days) { }

    /**
     * The tree of nodes representing the content area of the window.
     */
get content() { return null; }

    /**
     * The Folders and Projects that the window is focusing on, limiting the sidebar to show only these items.
     */
get focus() { return null; }

    /**
     * Whether the inspector is currently visible in the window. On iOS, showing this pane may implicitly hide other panes and may be only transiently visible, depending on the available space.
     */
get inspectorVisible() { return null; }

    /**
     * Whether the window is in compact layout, where extra panes like the sidebar and inspector are shown atop the content instead of side-by-side.
     */
get isCompact() { return null; }

    /**
     * Whether or not this window is a tab. This only returns true on macOS.
     */
get isTab() { return null; }

    /**
     * The currently selected perspective in this Window.
     */
get perspective() { return null; }

    /**
     * The current selection in the window.
     */
get selection() { return null; }

    /**
     * The tree of nodes representing the sidebar of the window.
     */
get sidebar() { return null; }

    /**
     * Whether the sidebar is currently visible in the window. On iOS, showing this pane may implicitly hide other panes and may be only transiently visible, depending on the available space.
     */
get sidebarVisible() { return null; }

    /**
     * The array of sibling Window objects that are in tabs alongside this Window. If isTab is false, then this will return an array that solely contains this Window.
     */
get tabGroupWindows() { return null; }

    /**
     * Whether the toolbar is currently visible in the window. This only returns false on macOS; the toolbar is always visible on iOS and visionOS.
     */
get toolbarVisible() { return null; }
}


/**
 * 
 */
class XML {
}


/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */

/**
 * 
 */
