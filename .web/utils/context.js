import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.state": {}, "state.upload_state": {"files": ["wavygreen.png", "FTV4 Midterm Essay.pdf", "fregly.png", "Osmo_CoverLetter.pdf"], "is_uploading": 0, "upload_progress": 0}, "state.foreach_state": {"className": ["MATH61: Discrete MathLIFE101: Touching GrassLIFE144: Finding a Partner For YouLIFE188: Shower TechniquesLIFE31: Intro to Leaving Your RoomMATH203: Graduate Topology"], "pageRoute": [["/dashboard", "/settings"]]}, "state.upload_state_modal": {"files": ["wavygreen.png", "FTV4 Midterm Essay.pdf", "fregly.png", "Osmo_CoverLetter.pdf"], "is_uploading": 0, "upload_progress": 0}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__state: createContext(null),
  state__upload_state: createContext(null),
  state__foreach_state: createContext(null),
  state__upload_state_modal: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const [state__upload_state, dispatch_state__upload_state] = useReducer(applyDelta, initialState["state.upload_state"])
  const [state__foreach_state, dispatch_state__foreach_state] = useReducer(applyDelta, initialState["state.foreach_state"])
  const [state__upload_state_modal, dispatch_state__upload_state_modal] = useReducer(applyDelta, initialState["state.upload_state_modal"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.state": dispatch_state__state,
      "state.upload_state": dispatch_state__upload_state,
      "state.foreach_state": dispatch_state__foreach_state,
      "state.upload_state_modal": dispatch_state__upload_state_modal,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__state.Provider value={ state__state }>
    <StateContexts.state__upload_state.Provider value={ state__upload_state }>
    <StateContexts.state__foreach_state.Provider value={ state__foreach_state }>
    <StateContexts.state__upload_state_modal.Provider value={ state__upload_state_modal }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__upload_state_modal.Provider>
    </StateContexts.state__foreach_state.Provider>
    </StateContexts.state__upload_state.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state.Provider>
  )
}