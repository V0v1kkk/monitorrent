import { throwOnError } from './helper'
import execute from './execute'
import topics from './topics'
import settings from './settings'
import trackers from './trackers'

export default {
    defaultClient () {
        return fetch('/api/default_client')
            .then(throwOnError)
            .then(response => response.json())
    },

    topics,
    execute,
    settings,
    trackers
}
