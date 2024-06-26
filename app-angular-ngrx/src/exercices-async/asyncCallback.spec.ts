import { asyncCallback } from "./asyncCallback";

describe('asyncCallback function', () => {
  it('should call callback (v1)', (done) => {
    function cb() {
      // le test sera terminé avant l'appel du callback
      expect(true).toBe(true);
      done();
    }
    asyncCallback(cb)
  });

  it('should call callback (v2)', (done) => {
    const cb = jasmine.createSpy();
    cb.and.callFake(() => {
      expect(cb).toHaveBeenCalled();
      done();
    });
    asyncCallback(cb);
  });

  it('should call callback with fake timers', () => {
    const originalSetTimeout = window.setTimeout;
    window.setTimeout = ((cb) => {
      cb();
    }) as any;

    const cb = jasmine.createSpy();
    asyncCallback(cb);

    expect(cb).toHaveBeenCalled();
    window.setTimeout = originalSetTimeout;
  })

  it('should call callback with fake timers', () => {
    jasmine.clock().install(); // créé un faux setTimeout (synchrone)
    const cb = jasmine.createSpy();
    asyncCallback(cb);

    jasmine.clock().tick(1000); // déclenche tous les callbacks enregistre entre 0 et 1000ms

    expect(cb).toHaveBeenCalled();
    jasmine.clock().uninstall(); // remet en place le vrai setTimeout
  })
});
