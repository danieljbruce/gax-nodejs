/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Code automatically generated by gapic-generator. DO NOT EDIT
// Copied from gax-nodejs/system-test/fixtures/google-gax-packaging-test-app/test/gapic-v1beta1.js

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {Transform} from 'stream';
import {EchoClient} from '../fixtures/google-gax-packaging-test-app/src/v1beta1';
import {GoogleAuth} from 'google-auth-library';
import {GoogleError} from '../../src';

describe('Run unit tests of echo client', () => {
  interface GoogleError extends Error {
    code: number;
  }
  const FAKE_STATUS_CODE = 1;
  const error = new Error() as GoogleError;
  error.code = FAKE_STATUS_CODE;
  const authStub = {
    getClient: async () => {
      return {
        getRequestHeaders: async () => {
          return {
            Authorization: 'Bearer zzzz',
          };
        },
      };
    },
  };

  describe('echo', () => {
    it('invokes echo without error', async done => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const content = 'content951530617';
      const expectedResponse = {
        content,
      };

      // Mock Grpc layer
      client.innerApiCalls.echo = mockSimpleGrpcMethod(
        request,
        expectedResponse
      );

      const [response] = await client.echo(request);
      assert.deepStrictEqual(response, expectedResponse);
      done();
    });

    it('invokes echo with error', async done => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client.innerApiCalls.echo = mockSimpleGrpcMethod(request, null, error);
      try {
        await client.echo(request);
      } catch (err) {
        assert(err instanceof GoogleError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      }
    });
  });

  describe('expand', () => {
    it('invokes expand without error', done => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const content = 'content951530617';
      const expectedResponse = {
        content,
      };

      // Mock Grpc layer
      client.innerApiCalls.expand = mockServerStreamingGrpcMethod(
        request,
        expectedResponse
      );

      const stream = client.expand(request);
      stream.on('data', (response: {}) => {
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
      stream.on('error', (err: Error) => {
        done(err);
      });
    });

    it('invokes expand with error', done => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client.innerApiCalls.expand = mockServerStreamingGrpcMethod(
        request,
        null,
        error
      );

      const stream = client.expand(request);
      stream.on('data', () => {
        assert.fail();
      });
      stream.on('error', (err: {code: number}) => {
        assert(err instanceof Error);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      });
    });
  });

  describe('pagedExpand', () => {
    it('invokes pagedExpand without error', async done => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const nextPageToken = '';
      const responsesElement = {};
      const responses = [responsesElement];
      const expectedResponse = {
        nextPageToken,
        responses,
      };

      // Mock Grpc layer
      client.innerApiCalls.pagedExpand = (
        actualRequest: {},
        options: {},
        callback: Function
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse.responses);
      };

      const [response] = await client.pagedExpand(request);
      assert.deepStrictEqual(response, expectedResponse.responses);
      done();
    });

    it('invokes pagedExpand with error', async done => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client.innerApiCalls.pagedExpand = mockSimpleGrpcMethod(
        request,
        null,
        error
      );

      try {
        await client.pagedExpand(request);
      } catch (err) {
        assert(err instanceof GoogleError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        done();
      }
    });
  });

  describe('chat', () => {
    it('invokes chat without error', done => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const content = 'content951530617';
      const expectedResponse = {
        content,
      };

      // Mock Grpc layer
      client.innerApiCalls.chat = mockBidiStreamingGrpcMethod(
        request,
        expectedResponse
      );

      const stream = client
        .chat()
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: {}) => {
          done(err);
        });

      stream.write(request);
    });

    it('invokes chat with error', done => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client.innerApiCalls.chat = mockBidiStreamingGrpcMethod(
        request,
        null,
        error
      );

      const stream = client
        .chat()
        .on('data', () => {
          assert.fail();
        })
        .on('error', (err: {code: number}) => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });

      stream.write(request);
    });
  });

  describe('wait', () => {
    it('invokes wait without error', done => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock response
      const content = 'content951530617';
      const expectedResponse = {
        content,
      };

      // Mock Grpc layer
      client.innerApiCalls.wait = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .wait(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch((err: {}) => {
          done(err);
        });
    });

    it('invokes wait with error', done => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });

      // Mock request
      const request = {};

      // Mock Grpc layer
      client.innerApiCalls.wait = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .wait(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch((err: {code: number}) => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      const client = new EchoClient({
        auth: authStub as unknown as GoogleAuth,
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert(
        client.descriptors.longrunning.wait.responseDecoder instanceof Function
      );
      assert(
        client.descriptors.longrunning.wait.metadataDecoder instanceof Function
      );
    });
  });
});

function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error?: {}
) {
  return (actualRequest: {}, options: {}, callback: Function) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}

function mockServerStreamingGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error?: Error
) {
  return (actualRequest: Function) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    const mockStream = new Transform({
      objectMode: true,
      transform: (chunk, enc, callback) => {
        if (error) {
          callback(error);
        } else {
          callback(undefined, response);
        }
      },
    });
    return mockStream;
  };
}

function mockBidiStreamingGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error?: Error
) {
  return () => {
    const mockStream = new Transform({
      objectMode: true,
      transform: (chunk, enc, callback) => {
        assert.deepStrictEqual(chunk, expectedRequest);
        if (error) {
          callback(error);
        } else {
          callback(undefined, response);
        }
      },
    });
    return mockStream;
  };
}

function mockLongRunningGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error?: {}
) {
  return (request: Function) => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
