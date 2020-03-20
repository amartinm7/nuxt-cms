import { firebaseConfig } from '../../../../middleware/framework/modules/security/GlobalConfiguration'

describe('GlobalConfigurationTest', () => {
  it('should add data to a collection', () => {
    expect(firebaseConfig).not.toBeUndefined()
    expect(firebaseConfig).not.toBeNull()
    expect(firebaseConfig.projectId).not.toBeNull()
  })
})
