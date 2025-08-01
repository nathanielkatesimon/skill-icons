FROM golang:tip-alpine3.22 AS builder

RUN apk add --no-cache git ca-certificates nodejs npm

WORKDIR /app
COPY api/icons/index.go /app/api/icons/index.go
COPY go_build.js /app/go_build.js
COPY server.go /app/server.go
COPY assets/ /app/assets/
COPY go.mod /app/go.mod
COPY go.sum /app/go.sum

RUN go mod tidy
RUN node go_build.js

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix nocgo -ldflags="-s -w" -o skillicons ./server.go

FROM scratch

COPY --from=builder /app/skillicons /skillicons

EXPOSE 8080

ENTRYPOINT ["/skillicons"]
